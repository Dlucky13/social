import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let myPostsData = [
    { id: 1, text:'Hi, how are you?' , likeCount:10},
    { id: 2, text:"It's my first post" , likeCount:25}
];

let contactsData = [
    { id:1, name: 'Dmitry' },
    { id:2, name: 'Danil' },
    { id:3, name: 'Andrey' },
    { id:4, name: 'Kostya' },
    { id:5, name: 'Artem' },
];

let dialogsData = [
    {id:1, text:'Hey.' },
    {id:2, text:'How about Thusday at 7.00 ?' },
    {id:3, text:'Have any plan on the next weekend?' }
];

ReactDOM.render(
  <React.StrictMode>
    <App myPostsData={myPostsData} contactsData={contactsData} dialogsData={dialogsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
