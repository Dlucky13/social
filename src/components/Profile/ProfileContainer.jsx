import React from 'react' ;
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {
    getProfileStatus,
    getUserProfile, saveProfileChanges,
    updateProfileAvatar,
    updateProfileStatus
} from "../../pseudoRedux/profilePage-reducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class InnerProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.UserId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                userId = this.props.history.push('/login')
            }
        }


this.props.getUserProfile(userId);
this.props.getProfileStatus(userId);}

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.UserId !== prevProps.match.params.UserId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props} updateProfileStatus={this.props.updateProfileStatus} status={this.props.status}
                     isOwner={!this.props.match.params.UserId}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isLogged: state.auth.isLogged,
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getProfileStatus, updateProfileStatus,
        updateProfileAvatar,saveProfileChanges}),
    withRouter
    // withAuthRedirect
)(InnerProfileContainer)