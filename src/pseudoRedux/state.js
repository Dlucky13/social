
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

    dispatch: function (action) {

        if (action.type === 'addPost') {

            let post = {
                id: 3,
                text: this._state.profilePage.newPostText,
                likeCount: 0
            };

            this._state.profilePage.myPostsData.push(post);
            this._state.profilePage.newPostText = '';
            this._state._subscriber(this._state);

        } else if (action.type === 'updateNewPostInput') {

            this._state.profilePage.newPostText = action.text;
            this._state._subscriber(this._state);

        } else if (action.type === 'updateNews') {

            let news = {
                id: 2,
                text: this._state.newsPage.addNewsText
            };

            this._state.newsPage.news.push(news);
            this._state.newsPage.addNewsText = '';
            this._state._subscriber(this._state);

        } else if (action.type === 'updateNewsText') {

            this._state.newsPage.addNewsText = action.text;
            this._state._subscriber(this._state);

        } else if (action.type === 'updateAddMessageText') {

            this._state.messagesPage.addMessageText = action.text;
            this._state._subscriber(this.getState());

        } else if (action.type === 'addMessageState') {

            let message = {
                id:4, text: store._state.messagesPage.addMessageText
            };
            this._state.messagesPage.dialogsData.push(message);
            this.dispatch( {type: 'updateAddMessageText', text: ''});
            this._state._subscriber(this.getState());
        }

    }
}

export const actionCreator_onPostChange = (text) => {
    return (
        { type:'updateNewPostInput' ,text :text}
    )
};
export const actionCreator_addNewPost = () => ({type: 'addPost'});
export const actionCreator_updateText = (text) => ({ type:'updateNewsText', text: text});
export const actionCreator_addNews = () => ({type: 'updateNews'});
export const actionCreator_newMessageInput = (text) => ({type: 'updateAddMessageText', text: text});
export const actionCreator_addMessage = () => ({type: 'addMessageState'});



window.store = store;
export default store;

