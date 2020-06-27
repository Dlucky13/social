import React from 'react' ;
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getUserProfile} from "../../pseudoRedux/profilePage-reducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class InnerProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.UserId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render () {
        return (
                <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
     return {
        profile: state.profilePage.profile,

    }
}

export default compose(
    connect(mapStateToProps,{getUserProfile}),
    withRouter,
    withAuthRedirect
)(InnerProfileContainer)