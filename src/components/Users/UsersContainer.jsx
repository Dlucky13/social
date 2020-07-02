import React from "react";
import {
    follow, getUsers,
    setCurrentPage,
    unfollow
} from "../../pseudoRedux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";
import Preloader from "../../common/Preloader";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class UsersInnerContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
      }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.getUsers(page, this.props.pageSize);
     }

    render() {
       
        return (
            <>
                {this.props.isLoading && <Preloader/>}
                <Users usersData={this.props.usersData} pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage} pagesCount={this.props.pagesCount}
                       onPageChanged={this.onPageChanged}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow} isDisabled={this.props.isDisabled}
                       disableToggle={this.props.disableToggle}
                />
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
        isDisabled: state.usersPage.isDisabled
    }
}

export default compose(
    connect(mapStateToProps,
        {follow, unfollow,getUsers, setCurrentPage }),
    withRouter
    // withAuthRedirect
)
(UsersInnerContainer)

