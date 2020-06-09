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


const App = (props) => {
    // debugger;

    return (
        <BrowserRouter>
        <div className='app_wrapper'>
            <Header/>
            <Nav/>
            <div className='wrapper_main_content'>
                < Route exact path='/' render={ () =>  <Profile myPostsData={props.myPostsData}/>}/>
                < Route  path='/profile' render={ () =>  <Profile myPostsData={props.myPostsData}/>}/>
                {/*< Route path='/profile' component={Profile}/>*/}
                < Route path='/messages' render={ () => <Messages contactsData={props.contactsData}
                                                  dialogsData={props.dialogsData}/>}/>
                < Route path='/news' component={News}/>
                < Route path='/music' component={Music}/>
                < Route path='/settings' component={Settings}/>
            </div>
        </div>
        </BrowserRouter>
    );
}


export default App;

