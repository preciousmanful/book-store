import React from 'react';

function Books({ books, changeBooksForm }) {

  return (
    <div className='books-container'>
      <h2>Book List:</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <span>{book.name}</span> <br /><i>by </i>{book.author} <br />Category: {book.category}
          </li>
        ))}
         <li className='add-button' onClick={changeBooksForm}>+</li>
      </ul>


    </div>
  );
}

export default Books;
