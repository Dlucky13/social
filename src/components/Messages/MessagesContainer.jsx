import React from 'react'
import Messages from "./Messages";
import {actionCreator_addMessage, actionCreator_newMessageInput} from "../../pseudoRedux/messagesPage-reducer";
import StoreContext from "../../Context";


const MessagesContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().messagesPage;

                let newMessageInputCont = (text) => {
                    store.dispatch(actionCreator_newMessageInput(text));
                }

                let addMessageCont = () => {
                    store.dispatch(actionCreator_addMessage());
                }
                return <Messages newMessageInputCont={newMessageInputCont} addMessageCont={addMessageCont}
                                 state={state}/>
            }
            }
        </StoreContext.Consumer>
    )

}

export default MessagesContainer;