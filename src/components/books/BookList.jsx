import {React} from 'react';
import  Book from './Book';

const BookList =  function(props){
    return(
        <ul className="bookList">
            {props.data.length === 0 ? <p className="noBooks">There are no books in this list</p>:
            props.data.map((book, index) =>
            <Book
                key={book.id}
                title={book.title}
                description={book.description}
                index={index}
                onChange={props.onToggle}
                onRemoveBook={props.removeBook}
                isRead={!book.isRead}
            />)
            }
        </ul>


    )


}


export default BookList;