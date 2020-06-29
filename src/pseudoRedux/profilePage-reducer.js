import {profileAPI, usersAPI} from "../api/api";

let initialState = {
        myPostsData: [
            { id: 1, text:'Hi, how are you?' , likeCount:10},
            { id: 2, text:"It's my first post" , likeCount:25}
        ],
        newPostText: 'type new message',
        profile: null,
        status: '',
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

        case 'setProfileStatus':
            return {
                ...state,
                status: action.status
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
export const setProfileStatusAC = (status) => ({type: 'setProfileStatus', status })
const setProfileAC = (profile) => ({type: 'setProfile', profile})

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then ( response => {
            dispatch(setProfileAC(response.data))}
        )
}

export const getProfileStatus = (userId) => (dispatch) => {
    profileAPI.getProfileStatus(userId)
        .then ( response => {
            dispatch(setProfileStatusAC(response.data))
        })
}

export const updateProfileStatus = (status) => (dispatch) => {
    profileAPI.updateProfileStatus(status)
        .then ( response => {
            if (response.data.resultCode === 0) {
                dispatch(setProfileStatusAC(status))
            }
        })
}

export default profilePage_reducer;