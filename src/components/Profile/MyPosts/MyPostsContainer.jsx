import React from 'react' ;
import {actionCreator_addNewPost, actionCreator_onPostChange} from "../../../pseudoRedux/profilePage-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {

    return {
        myPostsData: state.profilePage.myPostsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        onPostChangeCont: (text) => {
            dispatch(actionCreator_onPostChange(text))
        },

        addNewPostCont:  () => {
            dispatch(actionCreator_addNewPost())
        }
    }
}


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;