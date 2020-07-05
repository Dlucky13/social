import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import React from "react";
import MainApp from "./App";

// setInterval(() => {
//     store.dispatch({type:'fake'})
// }, 1000);

ReactDOM.render(
    // <React.StrictMode>
    <MainApp />,
    // </React.StrictMode>,
    document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
