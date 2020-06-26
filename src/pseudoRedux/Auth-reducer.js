import {authAPI} from "../api/api";


let initialState = {
    id: null,
    email: null,
    login: null,
    isLogged: false,
    isLoading: false,
}

let auth_reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'setAuthorizedUser':
            return {
                ...state,
                ...action.data,
                isLogged: true
            }
        case 'loadingAuthDataToogle':
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state;
    }
}

const setAuthorizedUser = (id,  login, email) => ({type:'setAuthorizedUser', data:{id, login, email }})
const loadingAuthDataToogle = (isLoading) => ({type: 'loadingAuthDataToogle', isLoading})


export const getAuthProfile = () => (dispatch) => {

    dispatch(loadingAuthDataToogle(true));
    authAPI.me()
        .then( (response) => {
            if (response.data.resultCode === 0) {
                dispatch(loadingAuthDataToogle(false));
                let {id, login, email} = response.data.data;
                dispatch(setAuthorizedUser(id, login, email));
            }
        });
};


export default auth_reducer;