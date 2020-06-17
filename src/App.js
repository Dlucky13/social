import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import {Route} from 'react-router-dom';
import MessagesContainer from "./components/Messages/MessagesContainer";
import NewsContainer from "./components/News/NewsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
    let state = props.store.getState();

    return (
        <div className='app_wrapper'>
            <Header />
            <Nav />
            <Sidebar state={state.sidebarPage} />
            <div className='wrapper_main_content'>
                < Route exact path='/' render={ () => <Profile />}/>
                < Route path='/profile' render={ () => <Profile />}/>
                < Route path='/messages' render={ () => <MessagesContainer />}/>
                < Route path='/news' render={ () => <NewsContainer />}/>
                < Route path='/music' component={Music}/>
                < Route path='/settings' component={Settings}/>
                < Route path='/users' render={ () => <UsersContainer />}/>
            </div>
        </div>
    );
}


export default App;

