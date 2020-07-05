import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../assets/img/avatar_default.jpg'
import {NavLink} from "react-router-dom";
import Pagination from "../../common/Pagination";

const Users = (props) => {

  return  (
            <div className={styles.users_wrapper}>

                <Pagination currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                            pagesCount={props.pagesCount} />

                {
                    props.usersData.map(user =>
                    <div key={user.id} className={styles.user_wrapper}>
                        <div className={styles.user_status}>
                            <NavLink to={`/profile/${user.id}`}>
                                {(user.photos.small) ? <img src={user.photos.small} className={styles.ava}></img>
                                : <img src={userPhoto} className={styles.ava}></img>}
                            </NavLink>
                            { user.followed
                                ? <button className={styles.btn} disabled={props.isDisabled.some( id => id === user.id)} onClick={() => {
                                    props.unfollow(user.id)

                                    }}>Unfollow</button>
                                : <button className={styles.btn} disabled={props.isDisabled.some(id => id === user.id)} onClick={() => {
                                    props.follow(user.id)

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