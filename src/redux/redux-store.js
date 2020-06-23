import {combineReducers, createStore} from "redux";
import messagesPage_reducer from "../pseudoRedux/messagesPage-reducer";
import newsPage_reducer from "../pseudoRedux/newsPage-reducer";
import profilePage_reducer from "../pseudoRedux/profilePage-reducer";
import sideBar_reducer from "../pseudoRedux/sideBar-reducer";
import users_reducer from "../pseudoRedux/users-reducer";
import auth_reducer from "../pseudoRedux/Auth-reducer";

let reducers = combineReducers({
    messagesPage: messagesPage_reducer,
    newsPage: newsPage_reducer,
    profilePage: profilePage_reducer,
    sidebarPage: sideBar_reducer,
    usersPage: users_reducer,
    auth: auth_reducer,
})

let store = createStore(reducers);

window.store = store;

export default store;