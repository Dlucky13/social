import {usersAPI} from "../api/api";

let initialState = {
    usersData : [],
    pagesData: {
        pageSize: 8,
        totalUsersCount: 0,
        currentPage: 1,
    },
    isLoading: true,
    isDisabled: [],
    fake: 1,
}


const users_reducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case 'fake': return {...state, fake: state.fake + 1}
        case 'follow':
            return {
                ...state,
                usersData: state.usersData.map( user => {
                    if( user.id === action.userId) {
                        return {
                            ...user,
                            followed: true,
                        }
                    }
                    return user;
                })
            }
        case 'unfollow':
            return {
                ...state,
                usersData: state.usersData.map( user => {
                    if ( user.id === action.userId) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user;
                })
            }

        case 'setUsers' :
            return {
                ...state,
                usersData: [...action.users]
                }


        case 'setCurrentPage' :
            return {
                ...state,
                pagesData: {
                    ...state.pagesData,
                    currentPage: action.currentPage}
            }

        case 'setPagesTotalCount':
            return {
                ...state,
                pagesData: {...state.pagesData,
                    totalUsersCount: action.totalCount,
                }
            }

        case 'isLoading':
            return {
                ...state,
                isLoading: action.isLoading,
            }

        case 'disableToggle':
            return {
                ...state,
                isDisabled: action.condition
                    ? [...state.isDisabled,action.userId]
                    : state.isDisabled.filter( id => id != action.userId)
            }

        default :
            return state;
    }
}

export default users_reducer;

const followAC = (userId) => ({type:'follow' , userId});
const unfollowAC = (userId) => ({type:'unfollow', userId});
const setUsersAC = (users) => ({type:'setUsers', users});
export const setCurrentPage = (currentPage) => ({type: 'setCurrentPage', currentPage});
export const setPagesTotalCount = (totalCount) => ({type: 'setPagesTotalCount', totalCount});
export const isLoadingToogle = (isLoading) => ({type:'isLoading', isLoading});
export const disableToggle = (condition, userId) => ({type: 'disableToggle', condition, userId});

export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(isLoadingToogle(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(isLoadingToogle(false));
                dispatch(setUsersAC(data.items));
                dispatch(setPagesTotalCount(data.totalCount));
            });
    }
};

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(disableToggle(true, userId));
        usersAPI.unfollow(userId)
            .then( data => {
                dispatch(disableToggle(false, userId));
                if (data.resultCode === 0) {
                    dispatch(unfollowAC(userId));
                }
            })
    }
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(disableToggle(true, userId));
        usersAPI.follow(userId)
            .then( data => {
                dispatch(disableToggle(false, userId));
                if (data.resultCode === 0) {
                    dispatch(followAC(userId));
                }
            })
    }
};