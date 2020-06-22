import React from 'react' ;
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../pseudoRedux/profilePage-reducer";
import {isLoadingToogle} from "../../pseudoRedux/users-reducer";

class InnerProfileContainer extends React.Component {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/10`)
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


let ProfileContainer = connect (mapStateToProps,{setUserProfile, isLoadingToogle})(InnerProfileContainer)



export default ProfileContainer;