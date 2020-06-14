import React from 'react' ;
import {actionCreator_addNewPost, actionCreator_onPostChange} from "../../../pseudoRedux/profilePage-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {

    let state = props.store.getState().profilePage;

    let onPostChangeCont = (text) => {
        props.store.dispatch(actionCreator_onPostChange(text));
    }

    let addNewPostCont = () => {
        props.store.dispatch(actionCreator_addNewPost());
    }

    return (
       <MyPosts onPostChangeCont={onPostChangeCont} addNewPostCont={addNewPostCont} profilePage={state}/>
    )
}

export default MyPostsContainer;