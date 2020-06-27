import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import {Route} from 'react-router-dom';
import MessagesContainer from "./components/Messages/MessagesContainer";
import NewsContainer from "./components/News/NewsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from './components/Login/Login'

const App = (props) => {
    let state = props.store.getState();

    return (
        <div className='app_wrapper'>
            <HeaderContainer />
            <Nav />
            <Sidebar state={state.sidebarPage} />
            <div className='wrapper_main_content'>
                {/*< Route exact path='/' render={ () => <ProfileContainer />}/>*/}
                < Route path='/profile/:UserId?' render={ () => <ProfileContainer />}/>
                < Route path='/messages' render={ () => <MessagesContainer />}/>
                < Route path='/news' render={ () => <NewsContainer />}/>
                < Route path='/music' component={Music}/>
                < Route path='/settings' component={Settings}/>
                < Route path='/users' render={ () => <UsersContainer />}/>
                < Route path='/login' render={ () => <LoginPage />}/>
            </div>
        </div>
    );
}


export default App;

