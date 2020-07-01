let initialState = {
        contactsData: [
            { id:1, name: 'Dmitry' },
            { id:2, name: 'Danil' },
            { id:3, name: 'Andrey' },
            { id:4, name: 'Kostya' },
            { id:5, name: 'Artem' },
        ],
        dialogsData: [
            {id:1, text:'Hey.' },
            {id:2, text:'How about Thusday at 7.00 ?' },
            {id:3, text:'Have any plan on the next weekend?' }
        ],

}


const messagesPage_reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'addMessageState':
            let message = {
                id: 4,
                text: action.data.addMessageText
            };

             return {
                 ...state,
                 dialogsData: [...state.dialogsData,message],
             }


        default:
            return state;
    }
}

export const addMessage = (data) => ({type: 'addMessageState', data});

export default messagesPage_reducer;