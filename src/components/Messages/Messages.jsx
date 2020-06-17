import React from 'react'
import styles from './Messages.module.css';
import Dialogs, {AddMessage} from "./Dialogs/Dialogs";
import Contacts from "./Contacts/Contacts";


const Messages = (props) => {

    let contactsElement = props.contactsData.map( contact =>
    {
        return (
            <Contacts name={contact.name} key={contact.id} id={contact.id}/>
            )
    })

    let dialogsElement = props.dialogsData.map (dialog => {
        return (
            <Dialogs text={dialog.text} key={dialog.id}/>
        )
    })

    return (
        <div className={styles.messages}>
            <div className={styles.contacts_wrapper}>
                {contactsElement}
            </div>
            <div className={styles.dialogs_wrapper}>
                {dialogsElement}
            </div>
            <AddMessage addMessageText={props.addMessageText} newMessageInputCont={props.newMessageInputCont}
                        addMessageCont={props.addMessageCont} />
        </div>
    )
}

export default Messages;