import React from 'react' ;
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import Preloader from "../../common/Preloader";

const Header = (props) => {

    return (
        <header className= {styles.header}>
            <img src='https://i1.sndcdn.com/avatars-000324128843-md332r-t500x500.jpg' />
            <div className={styles.auth_block}>

                {!props.isLogged
                    ?   <>
                        <NavLink to={'/login'} className={styles.auth_link}>Login</NavLink>
                        {props.isLoading && <Preloader/>}
                        </>
                    : <p>{props.login}</p>}
            </div>
        </header >
    )
}

export default Header;