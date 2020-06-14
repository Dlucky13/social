import React from 'react'
import Messages from "./Messages";
import {actionCreator_addMessage, actionCreator_newMessageInput} from "../../pseudoRedux/messagesPage-reducer";


const MessagesContainer = (props) => {

    let state= props.store.getState().messagesPage;

    let newMessageInputCont = (text) => {
        props.store.dispatch(actionCreator_newMessageInput(text));
    }

    let addMessageCont = () => {
        props.store.dispatch(actionCreator_addMessage());
    }

    return (
        < Messages newMessageInputCont={newMessageInputCont} addMessageCont={addMessageCont} state={state}/>
    )
}

export default MessagesContainer;