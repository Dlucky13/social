import React from 'react' ;
import {onPostChangeCont, addNewPostCont} from "../../../pseudoRedux/profilePage-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {

    return {
        myPostsData: state.profilePage.myPostsData,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps,{onPostChangeCont, addNewPostCont})(MyPosts);

export default MyPostsContainer;