import React from "react";
import BookShelf from "./BookShelf";

const Shelves = ({books ,changeShelf}) => {
  const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
  const wantToRead = books.filter((book) => book.shelf === 'wantToRead');
  const read = books.filter((book) => book.shelf === 'read');

  return (
    <div>
      <BookShelf title ='Currently Reading' books ={currentlyReading} changeShelf={changeShelf}/>
      <BookShelf title ='Want To Read' books={wantToRead} changeShelf={changeShelf}/>
      <BookShelf title='Read' books={read} changeShelf={changeShelf}/>
    </div>
  )

}

export default Shelves
