import {React, useState} from 'react';

const AddBook = function({onCreate, onRemoveAll}) {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    function submitHandler(event) {
        event.preventDefault();
        onCreate(value1, value2);
    }

    return(
        <div className="new_book">
            <form onSubmit={submitHandler}>
            <input className="addBook_title"
                type="text"
                value={value1}
                placeholder='Title of the book'
                onChange={(event) =>setValue1(event.target.value)}
            />
            <textarea className="addBook_description"
                rows="5"
                value={value2}
                placeholder="Description of the book"
                onChange={(event) => setValue2(event.target.value)}
            />
            <input className="addBook_btn"
                 type="button"
                 value="Add new book"
                 onClick={(event) => onCreate(value1,value2) }
            />
            <input className="removeAllBook_btn"
                type="button"
                onClick={(event) => onRemoveAll()}
                value="Remove all books"
            />
            </form>

        </div>

    )

}



export default AddBook;