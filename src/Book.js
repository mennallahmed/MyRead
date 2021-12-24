import React from "react";
import ShelfChanger from "./ShelfChanger";

const Book = ({bookDetails, changeShelf, shelf}) => {

  const imageBackground =
  bookDetails.imageLinks && bookDetails.imageLinks.thumbnail
      ? bookDetails.imageLinks.thumbnail: "";
  
  return(
    <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageBackground})` }}></div>
              <ShelfChanger bookDetails={bookDetails} changeShelf={changeShelf} shelf={shelf}/>
            </div>
            <div className="book-title">{bookDetails.title ? bookDetails.title : 'No title available'}</div>
            <div className="book-authors">{bookDetails.authors && bookDetails.authors.join(', ')}</div>
          </div>
  )
 
}

export default Book
