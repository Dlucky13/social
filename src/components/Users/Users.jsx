import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../assets/img/avatar_default.jpg'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

const Users = (props) => {

    let pagesNumb = [];
    for ( let i = 1; i <=5; i++) {
        pagesNumb.push(i);
    }

    for ( let j =  props.pagesCount - 2; j <= props.pagesCount; j++) {
        pagesNumb.push(j);
    }
// debugger
  return  (
            <div className={styles.users_wrapper}>

                <div>
                    {pagesNumb.map(page => {
                        return <span className={props.currentPage === page && styles.current_page }
                        onClick={ () => {props.onPageChanged(page)}}> {page} </span>
                    })}
                </div>

                {
                    props.usersData.map(user =>
                    <div key={user.id} className={styles.user_wrapper}>
                        <div className={styles.user_status}>
                            <NavLink to={`/profile/${user.id}`}>
                                {(user.photos.small) ? <img src={user.photos.small} className={styles.ava}></img>
                                : <img src={userPhoto} className={styles.ava}></img>}
                            </NavLink>
                            { user.followed
                                ? <button className={styles.btn} onClick={() => {
                                    usersAPI.unfollow(user.id)
                                        .then( data => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(user.id);
                                            }
                                        })
                                    }}>Unfollow</button>
                                : <button className={styles.btn} onClick={() => {
                                    usersAPI.follow(user.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(user.id)
                                            }
                                        })
                                    }}>Follow</button>}
                        </div>
                        <div className={styles.user_info}>
                            <div>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </div>
                            <div>{'user.location'}</div>
                        </div>
                    </div>
                )}
            </div>
  )
}

export default Users