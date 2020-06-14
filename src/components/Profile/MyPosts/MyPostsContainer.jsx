import React from 'react' ;
import {actionCreator_addNewPost, actionCreator_onPostChange} from "../../../pseudoRedux/profilePage-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../Context";


const MyPostsContainer = (props) => {
// debugger;
    return (
        <StoreContext.Consumer>
            { (store )=> {
                let state = store.getState();

                let onPostChangeCont = (text) => {
                    store.dispatch(actionCreator_onPostChange(text));
                };

                let addNewPostCont = () => {
                    store.dispatch(actionCreator_addNewPost());
                }

                return (
                    <MyPosts onPostChangeCont={onPostChangeCont} addNewPostCont={addNewPostCont} profilePage={state.profilePage}/>
                )
            }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;