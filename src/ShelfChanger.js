import React from "react";


const ShelfChanger = ({bookDetails, changeShelf, shelf}) => {

  const onChangeShelf=(e)=>{
  	e.preventDefault()
    changeShelf(bookDetails, e.target.value)
  }
  const defaultValue =() =>{
    if(bookDetails.shelf){
      return bookDetails.shelf
    }
    else if (shelf !=="none"){
      return shelf
    }
    else return "none"
  }

  return(
    <div className="book-shelf-changer">
    <select defaultValue={defaultValue()} onChange={onChangeShelf}>
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
