import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './pseudoRedux/state'
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={store.addPost.bind(store)} updateNewPostInput={store.updateNewPostInput.bind(store)}
                     updateNews={store.updateNews.bind(store)} updateNewsText={store.updateNewsText.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.setSubscribe(rerenderEntireTree)
rerenderEntireTree(store.getState());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
