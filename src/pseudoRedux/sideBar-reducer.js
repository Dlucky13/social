let initialState = {
        friendsData: [
            {id:1, name: 'Vlad'},
            {id:2, name: 'Ivan'},
            {id:3, name: 'Nikita'}
        ]

}

const sideBar_reducer = (state = initialState, action) => {
    return {...state};
}


export default sideBar_reducer;