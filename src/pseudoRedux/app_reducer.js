import {getAuthProfile} from "./Auth-reducer";

let initialState = {
    initialized: false,
}

let app_reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'initializedSuccess':
            return {
                ...state,
                initialized: true
        }

        default :
            return state;
    }
}

let initializedSuccess = () => ({type: 'initializedSuccess'});

export let initializingApp = () => (dispatch) => {
    let promise = dispatch(getAuthProfile());
debugger;
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        })
}

export default app_reducer;