import React from "react";
import Book from "./Book";

const SearchBooks = ({query, searchBook, searchedBooks, changeShelf, books}) =>{
  
  
    return(
      <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" value={query} onChange={searchBook}/>
                {console.log(query)}
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {searchedBooks.map((book) => {
                  const bookOnShelf = books.find(
                  ({ id }) => book.id === id
                 );
                 const shelf = bookOnShelf ? bookOnShelf.shelf : "none";
                 return (
                  <li key={book.id}>
                  <Book bookDetails={book} changeShelf={changeShelf}  shelf={shelf}/>
                  </li>
                );
                })}                
              </ol>
            </div>
          </div>
  
    )
 

}

export default SearchBooks