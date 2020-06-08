import React from 'react';
import styles from './Contacts.module.css';
import {NavLink} from "react-router-dom";

const Contacts = (props) => {
    debugger;
    let path = '/dialog/' + props.id;
    return (
        <div>
            <NavLink to={path} className={styles.nameLink} activeClassName={styles.active_contact}
            >{props.name}</NavLink>
        </div>
    )
}


export default Contacts;