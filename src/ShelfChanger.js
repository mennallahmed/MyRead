import React from "react";


const ShelfChanger = ({bookDetails, changeShelf}) => {

  const onChangeShelf=(e)=>{
  	e.preventDefault()
    changeShelf(bookDetails, e.target.value)
  }
  return(
    <div className="book-shelf-changer">
    <select defaultValue={bookDetails.shelf} onChange={onChangeShelf}>
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
  )

}

export default ShelfChanger