import React from 'react' ;
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../pseudoRedux/profilePage-reducer";
import {withRouter} from "react-router-dom";

class InnerProfileContainer extends React.Component {


    componentDidMount() {

        let userId = this.props.match.params.UserId;
        if (!userId) {
            userId = 2;
        }

        axios.get('https://social-network.samuraijs.com/api/1.0//profile/' + userId)
            .then ( response => {
                this.props.setUserProfile(response.data)})
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