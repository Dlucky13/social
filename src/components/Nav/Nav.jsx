import React from 'react';
import styles from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={styles.site_nav}>
            <div className = {styles.item}>
                <a href='/Profile' className={`${styles.link} ${styles.active}`}>Profile</a>
            </div>
            <div className = {styles.item}>
                <a href='/Messages' className={styles.link}>Messages</a>
            </div>
            <div className = {styles.item}>
                <a href='#' className={styles.link}>News</a>
            </div>
            <div className = {styles.item}>
                <a href='#' className={ styles.link }>Music</a>
            </div>
            <div className = {styles.item}>
                <a href='#' className={styles.link}>Settings</a>
            </div>
        </nav>
    )
}

export default Nav;