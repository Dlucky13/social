import React from 'react';
import styles from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={styles.friend_wrapper}>
            <img src='https://i1.sndcdn.com/avatars-000323700456-wu94n2-t500x500.jpg' className={styles.ava}/>
            <div>{props.fname}</div>
        </div>
    )
}

export default Friend;