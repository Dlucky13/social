import profilePage_reducer, {addNewPost, deletePost} from "./profilePage-reducer";
import React from "react";

let state = {
    myPostsData: [
        { id: 1, text:'Hi, how are you?' , likeCount:10},
        { id: 2, text:"It's my first post" , likeCount:25}
    ],
    profile: null,
    status: '',
};

test ('length of posts should be incremented', () => {
    //1. initial data
    let action = addNewPost('test');

    // 2. action
    let newState = profilePage_reducer (state,action)

    // 3. expectation result
    expect(newState.myPostsData.length).toBe(3);
});

test ('should message coincide', () => {
    // 1 initial data
    let action = addNewPost({newPostText:'testing message'})

    // 2. action
    let newState = profilePage_reducer(state,action)

    // 3. compare result
    expect(newState.myPostsData[2].text).toBe('testing message');
})

test ('length must be decrement after deliting', () => {

    let action = deletePost(1);

    let newState = profilePage_reducer(state,action)

    expect(newState.myPostsData.length).toBe(1);
})