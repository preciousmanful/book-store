import React, { useState } from 'react';

function BooksForm({ onAddBook }) {
  const [name, setName] = useState('');
  const [author, setPhoneNumber] = useState('');
  const [category, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { name, author, category };
    onAddBook(newBook);
    console.log('New book:', newBook);
    // You can clear the form fields here if needed
  };

  return (
    <div className='books-form-container'>
      <h2>Add New Book:</h2>
      <form onSubmit={handleSubmit}>
        
        <input
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder='Book Title e.g Atomic Habits'
          required /><br />

       
        <input
          type="text"
          value={author}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder='author e.g David'
          required
        /><br />

        
        <input 
          type="text" 
          value={category} 
          onChange={(e) => setLocation(e.target.value)} 
          placeholder='category e.g fiction,etc'
          required /><br />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BooksForm;
