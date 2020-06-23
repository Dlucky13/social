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

export const setAuthorizedUser = (id,  login, email) => ({type:'setAuthorizedUser', data:{id, login, email }})
export const loadingAuthDataToogle = (isLoading) => ({type: 'loadingAuthDataToogle', isLoading})

export default auth_reducer;