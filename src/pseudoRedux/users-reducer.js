let initialState = {
    usersData : [],
    pagesData: {
        pageSize: 8,
        totalUsersCount: 0,
        currentPage: 3,

    }
}


const users_reducer = (state = initialState, action) => {
    // debugger
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
                // usersData: [...state.usersData, ...action.users],
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

        default :
            return state;
    }
}

export default users_reducer;

export const followAC = (userId) => ({type:'follow' , userId});
export const unfollowAC = (userId) => ({type:'unfollow', userId});
export const setUsersAC = (users) => ({type:'setUsers', users});
export const setCurrentPageAC = (currentPage) => ({type: 'setCurrentPage', currentPage});
export const setPagesTotalCountAC = (totalCount) => ({type: 'setPagesTotalCount', totalCount});