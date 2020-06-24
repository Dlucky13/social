import React from 'react' ;
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../pseudoRedux/profilePage-reducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";

class InnerProfileContainer extends React.Component {


    componentDidMount() {

        let userId = this.props.match.params.UserId;
        if (!userId) {
            userId = 2;
        }

        profileAPI.getProfile(userId)

            .then ( data => {
                this.props.setUserProfile(data)}
            )
    }

    render () {
        return (

                <Profile {...this.props} />

        )
    }
}

let mapStateToProps = (state) => {

    return {
        profile: state.profilePage.profile
    }
}

let ProfileContainerWithRouter = withRouter(InnerProfileContainer)

let ProfileContainer = connect (mapStateToProps,{setUserProfile})(ProfileContainerWithRouter)



export default ProfileContainer;