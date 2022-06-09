import {React} from 'react';

const Book =  function(props){
    
    return (
        <li className="book">
            <div className="book_title">
            {props.index + 1}.
            <span className={props.isRead ? "notIsRead" : "isRead"}>
                {props.title}
            </span>
            </div>
            <div className="book_description">
                {props.description}
            </div>
            <div className="book_inputs">
            <input type="button" className="delete_book" 
            value="delete" 
            onClick={() => props.onRemoveBook(props.index)}
            />
            <input type="checkbox" className="check_book" 
            onChange={() => props.onChange(props.index)}
            />
            </div>
           
        </li>

    )

}


export default Book;