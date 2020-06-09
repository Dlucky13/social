
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
    },
    sidebarPage: {
        friendsData: [
            {id:1, name: 'Vlad'},
            {id:2, name: 'Ivan'},
            {id:3, name: 'Nikita'}
        ]
    }
}

export default state;