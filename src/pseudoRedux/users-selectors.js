import {createSelector} from "reselect";
// export const getUsersData = state => (state.usersPage.usersData);
//искусственно усложненный селектор

export const getUsersDataSelector = state => state.usersPage.usersData;

export const getUsersDataSuperSelector = createSelector(getUsersDataSelector, (users) => {
    return users.filter(user => true)
})
//

export const getPageSize = state => (state.usersPage.pagesData.pageSize);
export const getCurrentPage = state => (state.usersPage.pagesData.currentPage);
export const getPagesCount = state => {
    return Math.ceil(state.usersPage.pagesData.totalUsersCount / state.usersPage.pagesData.pageSize)}
export const getIsLoading = state => state.usersPage.isLoading;
export const getIsDisabled = state => state.usersPage.isDisabled;







