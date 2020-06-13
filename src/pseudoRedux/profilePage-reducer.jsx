let initialState = {
        myPostsData: [
            { id: 1, text:'Hi, how are you?' , likeCount:10},
            { id: 2, text:"It's my first post" , likeCount:25}
        ],
        newPostText: 'type new message'

}

const profilePage_reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'addPost':
            let post = {
                id: 3,
                text: state.newPostText,
                likeCount: 0
            };

            state.myPostsData.push(post);
            state.newPostText = '';
            return state;

        case 'updateNewPostInput':
            state.newPostText = action.text;
            return state;

        default:
            return state;
    }
}


export const actionCreator_onPostChange = (text) => {
    return (
        { type:'updateNewPostInput' ,text :text}
    )
};
export const actionCreator_addNewPost = () => ({type: 'addPost'});

export default profilePage_reducer;