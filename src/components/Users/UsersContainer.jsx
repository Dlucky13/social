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
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";


class UsersInnerContainer extends React.Component {

    componentDidMount() {
        this.props.isLoadingToogle(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                    this.props.isLoadingToogle(false);
                    this.props.setUsers(data.items);
                    this.props.setPagesTotalCount(data.totalCount);
                }
            )
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.isLoadingToogle(true)
        usersAPI.getUsers(page,this.props.pageSize )
            .then(data => {
                    this.props.isLoadingToogle(false);
                    this.props.setUsers(data.items);
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

let UsersInnerContainerWithRouter = withRouter(UsersInnerContainer);

let UsersContainer = connect(mapStateToProps, {follow, unfollow,
    setUsers, setCurrentPage, setPagesTotalCount, isLoadingToogle})(UsersInnerContainerWithRouter);

export default UsersContainer;

