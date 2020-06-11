import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {addPost, updateNewPostInput, updateNews, updateNewsText, subscribe} from './pseudoRedux/state'
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";



export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostInput={updateNewPostInput}
                     updateNews={updateNews} updateNewsText={updateNewsText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

subscribe(rerenderEntireTree);
rerenderEntireTree(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
