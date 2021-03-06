import React from "react";
import styles from './News.module.css';

let newsText = React.createRef()

const OneNews = (props) => {
    return (
        <p> {props.text} </p>
    )
};



const News = ( props ) => {

    let postedNews = props.news.map( news => {
        return (
            <OneNews text={news.text} key={news.id}/>
        )
        });

    let updateText = () => {
        let text = newsText.current.value;
        props.updateTextCont(text)
    };

    let addNews = () => {
        props.addNewsCont();
    };

    return (
        <div>
            <h2>News</h2>
            <div className={styles.add_news_wrapper}>
                <textarea ref={newsText} value={props.addNewsText} onChange={updateText}/>
                <button onClick={addNews}>Add news</button>
            </div>
            <div>
                {postedNews}
            </div>
        </div>
    )
}

export default News;