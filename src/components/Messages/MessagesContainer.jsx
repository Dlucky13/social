import React from 'react'
import Messages from "./Messages";
import {newMessageInputCont, addMessageCont} from "../../pseudoRedux/messagesPage-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


let mapStateToProps = (state) => {

    return {
        contactsData: state.messagesPage.contactsData,
        dialogsData: state.messagesPage.dialogsData,
        addMessageText: state.messagesPage.addMessageText,
    }
}

let withAuthRedirectContainer = withAuthRedirect(Messages)

const MessagesContainer = connect(mapStateToProps,{newMessageInputCont, addMessageCont})(withAuthRedirectContainer)

export default MessagesContainer;