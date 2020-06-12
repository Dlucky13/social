import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Messages from "./components/Messages/Messages";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import {Route} from 'react-router-dom';


const App = (props) => {

    return (
        <div className='app_wrapper'>
            <Header />
            <Nav />
            <Sidebar state={props.state.sidebarPage} />
            <div className='wrapper_main_content'>
                < Route exact path='/' render={ () =>  <Profile state={props.state.profilePage} dispatch={props.dispatch}/>}/>
                < Route  path='/profile' render={ () =>  <
                    Profile state={props.state.profilePage}
                            dispatch={props.dispatch}/>}/>
                < Route path='/messages' render={
                    () => <Messages state={props.state.messagesPage} />}/>
                < Route path='/news' render={ () => <News state={props.state.newsPage}
                              dispatch={props.dispatch}/>}/>
                < Route path='/music' component={Music}/>
                < Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}


export default App;

