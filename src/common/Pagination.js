import React from "react";
import styles from './Pagination.module.css'

const Pagination = ({pagesCount,currentPage,onPageChanged}) => {

    let pagesNumb = [];
    for ( let i = 1; i <=5; i++) {
        pagesNumb.push(i);
    }

    for ( let j =  pagesCount - 2; j <= pagesCount; j++) {
        pagesNumb.push(j);
    }

    return (
        <div>
        {pagesNumb.map( (page, id) => {
            return <span className={(currentPage === page && styles.current_page).toString()} key={id}
                         onClick={ () => {onPageChanged(page)}}> {page} </span>
        })}
    </div>
    )
}

export default Pagination