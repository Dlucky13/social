import React from "react";
import * as axios from "axios";
import {
    follow, isLoadingToogle,
    setCurrentPage,
    setPagesTotalCount,
    setUsers,
    unfollow
} from "../../pseudoRedux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";
import Preloader from "../../common/Preloader";


class UsersInnerContainer extends React.Component {

    componentDidMount() {
        this.props.isLoadingToogle(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.isLoadingToogle(false);
                    this.props.setUsers(response.data.items);
                    this.props.setPagesTotalCount(response.data.totalCount);
                }
            )
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.isLoadingToogle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.isLoadingToogle(false);
                    this.props.setUsers(response.data.items);
                }
            )
    }

    render() {
        return (
            <>
                {this.props.isLoading && <Preloader/>}
                <Users usersData={this.props.usersData} pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage} pagesCount={this.props.pagesCount}
                       onPageChanged={this.onPageChanged} follow={this.props.follow}
                       unfollow={this.props.unfollow}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {

    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pagesData.pageSize,
        currentPage: state.usersPage.pagesData.currentPage,
        pagesCount: Math.ceil(state.usersPage.pagesData.totalUsersCount / state.usersPage.pagesData.pageSize),
        isLoading: state.usersPage.isLoading,
    }
}

let UsersContainer = connect(mapStateToProps, {follow, unfollow,
    setUsers, setCurrentPage, setPagesTotalCount, isLoadingToogle})(UsersInnerContainer);

export default UsersContainer;

