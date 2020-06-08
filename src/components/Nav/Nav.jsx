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
                <NavLink to='/messages' className={styles.link} activeClassName={styles.activeLink}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='news' className={styles.link} activeClassName={styles.activeLink}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='music' className={styles.link} activeClassName={styles.activeLink}>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='settings' className={styles.link} activeClassName={styles.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}


export default Nav;