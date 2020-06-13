import profilePage_reducer from "./profilePage-reducer";
import messagesPage_reducer from "./messagesPage-reducer";
import newsPage_reducer from "./newsPage-reducer";

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
            addMessageText: 'new Message',
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

        _subscriber: [],
    },

    getState() {
      return this._state;
    },


    setSubscribe(observer) {
        this._state._subscriber = observer;
    },

    dispatch (action) {
        profilePage_reducer(this._state.profilePage, action)
        messagesPage_reducer(this._state.messagesPage, action)
        newsPage_reducer(this._state.newsPage, action)
        this._state._subscriber(this._state);

    }

}





window.store = store;
export default store;

