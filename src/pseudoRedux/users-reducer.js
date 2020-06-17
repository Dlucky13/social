let initialState = {
    usersData : [],
}


const users_reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'follow':
            return {
                ...state,
                usersData: state.usersData.map( user => {
                    if( user.id === action.userId) {
                        return {
                            ...user,
                            follow: true,
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
                            follow: false
                        }
                    }
                    return user;
                })
            }

        case 'setUsers' :
            return {
                ...state,
                usersData: [...state.usersData, ...action.users],
            }
        default :
            return state;
    }
}

export default users_reducer;

export const followAC = (userId) => ({type:'follow' , userId});
export const unfollowAC = (userId) => ({type:'unfollow', userId});
export const setUsersAC = (users) => ({type:'setUsers', users})