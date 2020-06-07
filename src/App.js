import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";


const  App = () => {
    return (
        <div className='app_wrapper'>
            <Header/>
            <Nav/>
            <div className='wrapper_main_content'>
                <Profile />
                {/*<Dialogs/>*/}
            </div>
        </div>

    );
}


export default App;

