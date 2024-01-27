import React, { useState } from 'react';
import Books from './Books';
import BooksForm from './BooksForm';
import './App.css';

function App() {
 const [sign, setSign] = useState("+")
  const [books, setBooks] = useState([
    { name: 'Atomic Habits', author: 'Precious Adwoa', category: 'science fiction' },
    { name: 'The seven Heads', author: 'James Clare', category: 'mysteries' },
  ]);

  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };
  const [showBooksForm, setShowBooksForm] = useState(false);

  const changeBooksForm = () => {
    
    setShowBooksForm(!showBooksForm);
    setSign(() => sign == "+" ? "-": "+" );
  }

  return (
    <div className="App">
      <h1>Books Store</h1>
      <Books books={books} changeBooksForm={changeBooksForm} sign ={ sign }/>
      {showBooksForm ?  <BooksForm onAddBook={handleAddBook} /> : null}
     
    </div>
  );
}

export default App;
