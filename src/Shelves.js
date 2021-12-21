import React from "react";
import BookShelf from "./BookShelf";

const Shelves = ({books}) => {
  const currentlyReading = books.filter((book) => book.shelf === 'Currently Reading');
  const wantToRead = books.filter((book) => book.shelf === 'Want to Read');
  const read = books.filter((book) => book.shelf === 'Read');

  return (
    <div>
      <BookShelf title ='Currently Reading' books ={currentlyReading}/>
      <BookShelf title ='Want To Read' books={wantToRead}/>
      <BookShelf title='Read' books={read}/>
    </div>
  )

}

export default Shelves