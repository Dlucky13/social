import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Messages from "./components/Messages/Messages";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';


const App = () => {
    return (
        <BrowserRouter>
        <div className='app_wrapper'>
            <Header/>
            <Nav/>
            <div className='wrapper_main_content'>
                < Route exact path='/' component={Profile}/>
                < Route path='/profile' component={Profile}/>
                < Route path='/messages' component={Messages}/>
                < Route path='/news' component={News}/>
                < Route path='/music' component={Music}/>
                < Route path='/settings' component={Settings}/>
            </div>
        </div>
        </BrowserRouter>
    );
}


export default App;

