import React from 'react'
import Messages from "./Messages";
import {addMessage} from "../../pseudoRedux/messagesPage-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {

    return {
        contactsData: state.messagesPage.contactsData,
        dialogsData: state.messagesPage.dialogsData,
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{addMessage })
)
(Messages);