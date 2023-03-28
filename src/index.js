import React from 'react';
import ReactDOM from 'react-dom/client';

import "./index.css"; 
import {books} from "./books"
import Book from './book'

const BookList = () => {
  return (
    <section className='booklist'>
      {/* //map is the function which makes duplicate array for each element      */}
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}

    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);

// Map Method
// const names = ['john', 'peter', 'susan'];
// const newNames = names.map((name) => {
//   console.log(name);
//   return <h1>{name}</h1>;
// });

// function BookList() {
//   return <section className='booklist'>{newNames}</section>;
// }