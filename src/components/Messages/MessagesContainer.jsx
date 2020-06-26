import React from 'react'
import Messages from "./Messages";
import {newMessageInputCont, addMessageCont} from "../../pseudoRedux/messagesPage-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {

    return {
        contactsData: state.messagesPage.contactsData,
        dialogsData: state.messagesPage.dialogsData,
        addMessageText: state.messagesPage.addMessageText,
    }
}


const MessagesContainer = connect(mapStateToProps,{newMessageInputCont, addMessageCont})(Messages)

export default MessagesContainer;