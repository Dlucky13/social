import React from 'react';
import styles from './Nav.module.css';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={styles.site_nav}>
            <div className={styles.item}>
                <NavLink to='/profile' className={styles.link} activeClassName={styles.activeLink}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/messages' className={styles.link}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='news' className={styles.link}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='music' className={styles.link}>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='settings' className={styles.link}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav;