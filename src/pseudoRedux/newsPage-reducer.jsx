let initialState = {
        news: [
            {id:1 , text: 'We added new function'},
        ],
        addNewsText: 'something happing?'

}

const newsPage_reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'updateNews':
            let news = {
                id: 2,
                text: state.addNewsText
            };

            state.news.push(news);
            state.addNewsText = '';
            return state;

        case 'updateNewsText':
            state.addNewsText = action.text;
            return state;

        default:
            return state;
    }

}

export const actionCreator_updateText = (text) => ({ type:'updateNewsText', text: text});
export const actionCreator_addNews = () => ({type: 'updateNews'});

export default newsPage_reducer;