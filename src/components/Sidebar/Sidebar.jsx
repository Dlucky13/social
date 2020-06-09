import React from 'react';
import styles from './Sidebar.module.css';
import Friend from './Friend/Friend';

const Sidebar = (props) => {
    let friendsElements = props.state.friendsData.map( friend => {
        return <Friend fname={friend.name}  />
    })
    return (
        <div className={styles.sidebar}>
            {friendsElements}
        </div>
    )
}

export default Sidebar;