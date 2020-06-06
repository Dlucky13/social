import React from 'react';
import './App.css';
import logotip from './logo.jpeg'
import Header from "./Header";
import Nav from './Nav'
import Profile from './Profile'


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Nav />
            <Profile />
        </div>

    );
}


export default App;

