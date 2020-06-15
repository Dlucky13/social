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
        addMessageText: 'new Message',

}


const messagesPage_reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'updateAddMessageText': {
            let stateCopy = {...state};
            stateCopy.addMessageText = action.text;
            return stateCopy;
        }

        case 'addMessageState': {
            let message = {
                id: 4,
                text: state.addMessageText
            };

            let stateCopy = {...state};
            stateCopy.dialogsData = [...state.dialogsData];
            stateCopy.dialogsData.push(message);
            return messagesPage_reducer(stateCopy, {type: 'updateAddMessageText', text: ''});

        }
        default:
            return state;
    }
}



export const actionCreator_newMessageInput = (text) => ({type: 'updateAddMessageText', text: text});
export const actionCreator_addMessage = () => ({type: 'addMessageState'});

export default messagesPage_reducer;