import React from "react";
import ShelfChanger from "./ShelfChanger";

const Book = ({bookDetails, changeShelf, shelf}) => {


 
  
  return(
    <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookDetails.imageLinks.thumbnail})` }}></div>
              <ShelfChanger bookDetails={bookDetails} changeShelf={changeShelf} shelf={shelf}/>
            </div>
            <div className="book-title">{bookDetails.title}</div>
            <div className="book-authors">{bookDetails.authors && bookDetails.authors.join(', ')}</div>
          </div>
  )
 
}

export default Book
