let rerenderEntireTree = () => {
    console.log( 'state changed');
}

let state = {
    messagesPage: {
        contactsData: [
            { id:1, name: 'Dmitry' },
            { id:2, name: 'Danil' },
            { id:3, name: 'Andrey' },
            { id:4, name: 'Kostya' },
            { id:5, name: 'Artem' },
        ],
        dialogsData: [
            {id:1, text:'Hey.' },
            {id:2, text:'How about Thusday at 7.00 ?' },
            {id:3, text:'Have any plan on the next weekend?' }
        ],
    },
    profilePage: {
        myPostsData: [
            { id: 1, text:'Hi, how are you?' , likeCount:10},
            { id: 2, text:"It's my first post" , likeCount:25}
        ],
        newPostText: 'type new message'
    },
    sidebarPage: {
        friendsData: [
            {id:1, name: 'Vlad'},
            {id:2, name: 'Ivan'},
            {id:3, name: 'Nikita'}
        ]
    },
    newsPage: {
        news: [
            {id:1 , text: 'We added new function'},
        ],
        addNewsText: 'something happing?'
    }
}
export let addPost = () => {
    let post = {
        id: 3,
        text: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.myPostsData.push(post);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostInput = (value) => {
    state.profilePage.newPostText = value;
    rerenderEntireTree(state);
}

export let updateNewsText = (value) => {
    state.newsPage.addNewsText = value;
    rerenderEntireTree(state);
}

export  let updateNews = () => {
    let news = {
        id:2,
        text: state.newsPage.addNewsText
    };
    state.newsPage.news.push(news);
    state.newsPage.addNewsText ='';
    rerenderEntireTree(state);
}

export let subscribe = (observer) => {
    rerenderEntireTree = observer;
}
export default state;

