import React from "react";
import {
    follow, requestUsers,
    setCurrentPage,
    unfollow
} from "../../pseudoRedux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";
import Preloader from "../../common/Preloader";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getIsDisabled,
    getIsLoading,
    getPagesCount,
    getPageSize,
    getUsersDataSuperSelector
} from "../../pseudoRedux/users-selectors";


class UsersInnerContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
      }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.getUsers(page, this.props.pageSize);
     }

    render() {
       // console.log('reRender(Users)')
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
    // console.log('MSTP(users)');
    return {
        usersData: getUsersDataSuperSelector(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        pagesCount: getPagesCount(state),
        isLoading: getIsLoading(state),
        isDisabled: getIsDisabled(state)
    }
}

export default compose(
    connect(mapStateToProps,
        {follow, unfollow,getUsers: requestUsers, setCurrentPage }),
    withRouter
    // withAuthRedirect
)
(UsersInnerContainer)

