import {usersAPI} from "../api/api";

let initialState = {
        myPostsData: [
            { id: 1, text:'Hi, how are you?' , likeCount:10},
            { id: 2, text:"It's my first post" , likeCount:25}
        ],
        newPostText: 'type new message',
        profile: null,
}

const profilePage_reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'addPost':
            let post = {
                id: 3,
                text: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                myPostsData: [...state.myPostsData,post],
                newPostText: ''
            };

        case 'updateNewPostInput':
            return {
                ...state,
                newPostText: action.text
            };

        case 'setProfile':
            return {
                ...state,
                profile: action.profile,
            }
        default:
            return state;
    }
}


export const onPostChangeCont = (text) => {
    return (
        { type:'updateNewPostInput' ,text :text}
    )
};
export const addNewPostCont = () => ({type: 'addPost'});
const setProfileAC = (profile) => ({type: 'setProfile', profile})

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then ( response => {
            dispatch(setProfileAC(response.data))}
        )
}

export default profilePage_reducer;