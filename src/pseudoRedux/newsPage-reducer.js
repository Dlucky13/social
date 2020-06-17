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

            return {
                ...state,
                news: [...state.news,news],
                addNewsText: '',
            }

        case 'updateNewsText':

            return {...state,
            addNewsText: action.text}

        default:
            return state;
    }

}

export const actionCreator_updateText = (text) => ({ type:'updateNewsText', text: text});
export const actionCreator_addNews = () => ({type: 'updateNews'});

export default newsPage_reducer;