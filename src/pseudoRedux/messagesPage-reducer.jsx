const messagesPage_reducer = (state, action) => {
    switch (action.type) {
        case 'updateAddMessageText':
            state.addMessageText = action.text;
            return state;

        case 'addMessageState':
            let message = {
                id:4,
                text: state.addMessageText
            };
            state.dialogsData.push(message);
            messagesPage_reducer( state,{type: 'updateAddMessageText', text: ''});
            return state;

        default:
            return state;
    }
}



export const actionCreator_newMessageInput = (text) => ({type: 'updateAddMessageText', text: text});
export const actionCreator_addMessage = () => ({type: 'addMessageState'});

export default messagesPage_reducer;