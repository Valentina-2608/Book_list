import {React, useState} from 'react';
import AddBook from './components/addForm/AddBook';
import BookList from './components/books/BookList';
import StatisticBoard from './components/statisticBoard/StatisticBoard';
import book_list from './store/books.json';
import './App.css';


function App() {
    let [booklist, setBookList] = useState(book_list);
     
    function onToggle(id) {
        setBookList (
            booklist.map((book, index) => {
                if (index === id) {
                    book.isRead = !book.isRead
                }
                return book;
            })
        )
      }

      function removeBook(id) {
        setBookList (
            booklist.filter((book, index) => index !== id)
        )
      }

    function onRemoveAll() {
        setBookList (booklist = [])
        return (
          <BookList data={booklist} onToggle={onToggle} removeBook={removeBook}/>
        )
      }
     
     
      function addBook(title, description) {
        setBookList(
          booklist.concat(
            [{
              "id": Date.now(),
              "isRead": false,
              "title": title,
              "description": description
            }]
          )
        )
        return (
          <BookList data={booklist} onToggle={onToggle} removeBook={removeBook}/>
        )
  }


    return(
    <div className="books">
        <div className="caption">BookList</div>

    <AddBook onRemoveAll={onRemoveAll} onCreate={addBook}/>
    <StatisticBoard data={booklist} />
    <BookList data={booklist} onToggle={onToggle} removeBook={removeBook}/>

    </div>
    

    )
}

export default App;
