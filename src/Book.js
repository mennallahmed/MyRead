import React from "react";
import ShelfChanger from "./ShelfChanger";

const Book = ({bookDetails, changeShelf}) => {


 
  
  return(
    <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookDetails.url})` }}></div>
              <ShelfChanger bookDetails={bookDetails} changeShelf={changeShelf}/>
            </div>
            <div className="book-title">{bookDetails.title}</div>
            <div className="book-authors">{bookDetails.author}</div>
          </div>
  )
 
}

export default Book
