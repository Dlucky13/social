export const getUsersData = state => (state.usersPage.usersData);
export const getPageSize = state => (state.usersPage.pagesData.pageSize);
export const getCurrentPage = state => (state.usersPage.pagesData.currentPage);
export const getPagesCount = state => {
    return Math.ceil(state.usersPage.pagesData.totalUsersCount / state.usersPage.pagesData.pageSize)}
export const getIsLoading = state => state.usersPage.isLoading;
export const getIsDisabled = state => state.usersPage.isDisabled;







