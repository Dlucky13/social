let initialState = {
    usersData : [],
    pagesData: {
        pageSize: 8,
        totalUsersCount: 0,
        currentPage: 1,
    },
    isLoading: true,
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

        case 'isLoading':
            return {
                ...state,
                isLoading: action.isLoading,
            }

        default :
            return state;
    }
}

export default users_reducer;

export const follow = (userId) => ({type:'follow' , userId});
export const unfollow = (userId) => ({type:'unfollow', userId});
export const setUsers = (users) => ({type:'setUsers', users});
export const setCurrentPage = (currentPage) => ({type: 'setCurrentPage', currentPage});
export const setPagesTotalCount = (totalCount) => ({type: 'setPagesTotalCount', totalCount});
export const isLoadingToogle = (isLoading) => ({type:'isLoading', isLoading});