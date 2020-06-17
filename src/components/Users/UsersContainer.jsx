import React from "react";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../pseudoRedux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => dispatch(setUsersAC(users))
    }
}


let UsersContainer = connect ( mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

