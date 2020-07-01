import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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
                ...action.data
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

const setAuthorizedUser = (id, login, email, isLogged) => ({
    type: 'setAuthorizedUser',
    data: {id, login, email, isLogged}
})
const loadingAuthDataToogle = (isLoading) => ({type: 'loadingAuthDataToogle', isLoading})

export const getAuthProfile = () => (dispatch) => {
    dispatch(loadingAuthDataToogle(true));
    authAPI.me()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(loadingAuthDataToogle(false));
                let {id, login, email} = response.data.data;
                dispatch(setAuthorizedUser(id, login, email, true));
            }
            dispatch(loadingAuthDataToogle(false));
        });
};

export const login = (email, password, rememberMe) => (dispatch) => {

    authAPI.login(email, password, rememberMe)
        .then(response => {
            // debugger
                if (response.data.resultCode === 0) {
                    dispatch(getAuthProfile())
                } else {
                    let errAction = stopSubmit('login', {_error: response.data.messages})
                    dispatch(errAction);
                }
            }
        )
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthorizedUser(null, null, null, false));
            }
        })
}


export default auth_reducer;