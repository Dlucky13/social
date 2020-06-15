import React from 'react'
import Messages from "./Messages";
import {actionCreator_addMessage, actionCreator_newMessageInput} from "../../pseudoRedux/messagesPage-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    // debugger
    return {
        contactsData: state.messagesPage.contactsData,
        dialogsData: state.messagesPage.dialogsData,
        addMessageText: state.messagesPage.addMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        newMessageInputCont: (text) => {
            dispatch(actionCreator_newMessageInput(text))
        },
        addMessageCont: () => {
            dispatch(actionCreator_addMessage())
        }
    }
}

const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages)

export default MessagesContainer;