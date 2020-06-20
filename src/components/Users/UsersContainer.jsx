import React from "react";
import {connect} from "react-redux";
import { followAC, setCurrentPageAC, setPagesTotalCountAC, setUsersAC, unfollowAC} from "../../pseudoRedux/users-reducer";
import * as axios from "axios";
import Users from "./Users";

class UsersInnerContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.
            props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setPagesTotalCount(response.data.totalCount);
                }
            )
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items)
                }
            )
    }

    render() {
        return < Users usersData={this.props.usersData} pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage} pagesCount={this.props.pagesCount}
                       onPageChanged={this.onPageChanged} follow={this.props.follow}
                       unfollow={this.props.unfollow}/>


    }
}


let mapStateToProps = (state) => {

    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pagesData.pageSize,
        currentPage: state.usersPage.pagesData.currentPage,
        pagesCount:  Math.ceil(state.usersPage.pagesData.totalUsersCount/state.usersPage.pagesData.pageSize)

    }
}

let mapDispatchToProps = (dispatch) => {
    // debugger
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
        setPagesTotalCount: (totalCount) => dispatch( setPagesTotalCountAC(totalCount))
    }
}


let UsersContainer = connect ( mapStateToProps, mapDispatchToProps)(UsersInnerContainer);

export default UsersContainer;

