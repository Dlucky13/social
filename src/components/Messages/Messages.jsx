import React from 'react'
import styles from './Messages.module.css';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import Dialogs from "./Dialogs/Dialogs";
import Contacts from "./Contacts/Contacts";


const Messages = (props) => {

    let contactsData = [
        { id:1, name: 'Dmitry' },
        { id:2, name: 'Danil' },
        { id:3, name: 'Andrey' },
        { id:4, name: 'Kostya' },
        { id:5, name: 'Artem' },
    ];

    let dialogsData = [
        {id:1, text:'Hey.' },
        {id:2, text:'How about Thusday at 7.00 ?' },
        {id:3, text:'Have any plan on the next weekend?' }
    ];

    let contactsElement = contactsData.map( contact =>
    {
        return (
            <Contacts name={contact.name} id={contact.id}/>
            )
    })

    let dialogsElement = dialogsData.map (dialog => {
        return (
            <Dialogs text={dialog.text} />
        )
    })

    return (
        <div className={styles.messages}>
            <BrowserRouter>
                <div className={styles.contacts_wrapper} >
                    {contactsElement}
                </div>
                {/*< Route path='/dialog/3' component={Dialogs}/>*/}
                <div className={styles.dialogs_wrapper}>
                    {dialogsElement}
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Messages;