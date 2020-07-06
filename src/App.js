import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter, HashRouter, Route, withRouter} from 'react-router-dom';
import MessagesContainer from "./components/Messages/MessagesContainer";
import loadable from '@loadable/component'
import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from './components/Login/Login';
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializingApp} from "./pseudoRedux/app_reducer";
import Preloader from "./common/Preloader";
import store from "./redux/redux-store";


const ProfileContainer = loadable(() => import("./components/Profile/ProfileContainer")) ;
const NewsContainer = loadable(() => import("./components/News/NewsContainer"))

class App extends React.Component {
    componentDidMount() {
           this.props.initializingApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader className='initialize_load'/>
        }

        let state = this.props.store.getState();

        return (
            <div className='app_wrapper'>
                <HeaderContainer/>
                <Nav/>
                <Sidebar state={state.sidebarPage}/>
                <div className='wrapper_main_content'>
                    {/*< Route exact path='/' render={ () => <ProfileContainer />}/>*/}
                    < Route path='/profile/:UserId?' render={() => <ProfileContainer/>}/>
                    < Route path='/messages' render={() => <MessagesContainer/>}/>
                    < Route path='/news' render={() => <NewsContainer/>}/>
                    < Route path='/music' render={Music}/>
                    < Route path='/settings' render={Settings}/>
                    < Route path='/users' render={() => <UsersContainer/>}/>
                    < Route path='/login' render={() => <LoginPage/>}/>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer =  compose(
    withRouter,
    connect(mapStateToProps,{initializingApp}))(App);

let MainApp = (props) => {
    return (
    <HashRouter >
        <Provider store={store}>
            <AppContainer store={store}/>
        </Provider>
    </HashRouter>
    )
}

export default MainApp