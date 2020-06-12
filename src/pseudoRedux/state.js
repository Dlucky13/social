// let rerenderEntireTree = () => {
//     console.log( 'state changed');
// }


let store = {
    _state: {
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
        },

        _subscriber: []
    },

    getState() {
      return this._state;
    },


    addPost() {

        let post = {
            id: 3,
            text: this._state.profilePage.newPostText,
            likeCount: 0
        };

        this._state.profilePage.myPostsData.push(post);
        this._state.profilePage.newPostText = '';
        this._state._subscriber(this._state);
    },

    updateNewPostInput(value) {
        this._state.profilePage.newPostText = value;
        this._state._subscriber(this._state);
    },

    updateNewsText (value) {
        this._state.newsPage.addNewsText = value;
        this._state._subscriber(this._state);
    },

    updateNews() {
        let news = {
            id:2,
            text: this._state.newsPage.addNewsText
        };
        this._state.newsPage.news.push(news);
        this._state.newsPage.addNewsText ='';
        this._state._subscriber(this._state);
    },

    setSubscribe(observer) {
        // let fnObj = {
        //     [observer.name]:observer,
        // }
        // this.state._subscriber.push(fnObj)
        this._state._subscriber = observer;
        // debugger;
    }
}


window.store = store;


export default store;

