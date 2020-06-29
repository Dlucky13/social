import React from 'react' ;
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getProfileStatus, getUserProfile, updateProfileStatus} from "../../pseudoRedux/profilePage-reducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class InnerProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.UserId;
        if (!userId) {
            userId = 8928;
        }
        this.props.getUserProfile(userId);
        this.props.getProfileStatus(userId);
    }

    render () {
        return (
                <Profile {...this.props} updateProfileStatus={this.props.updateProfileStatus} status={this.props.status}/>
        )
    }
}

let mapStateToProps = (state) => {
     return {
        profile: state.profilePage.profile,
        status: state.profilePage.status

    }
}

export default compose(
    connect(mapStateToProps,{getUserProfile,getProfileStatus,updateProfileStatus}),
    withRouter,
    // withAuthRedirect
)(InnerProfileContainer)