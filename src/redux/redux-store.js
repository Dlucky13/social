import {applyMiddleware, combineReducers, createStore} from "redux";
import messagesPage_reducer from "../pseudoRedux/messagesPage-reducer";
import newsPage_reducer from "../pseudoRedux/newsPage-reducer";
import profilePage_reducer from "../pseudoRedux/profilePage-reducer";
import sideBar_reducer from "../pseudoRedux/sideBar-reducer";
import users_reducer from "../pseudoRedux/users-reducer";
import auth_reducer from "../pseudoRedux/Auth-reducer";
import thunkMiddleWare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    messagesPage: messagesPage_reducer,
    newsPage: newsPage_reducer,
    profilePage: profilePage_reducer,
    sidebarPage: sideBar_reducer,
    usersPage: users_reducer,
    auth: auth_reducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;