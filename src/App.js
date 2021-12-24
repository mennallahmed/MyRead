import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Link} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Header from './Header'
import Shelves from './Shelves'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    query: '',
    searchedBooks: [],
   
  }

  async componentDidMount() {
    // get books from BooksAPI
    const books = await BooksAPI.getAll()
    this.setState({ books })
 
  }

  changeShelf = (SelectedBook, newShelf) =>{
    BooksAPI.update(SelectedBook, newShelf).then(response => {
      SelectedBook.shelf = newShelf;
      // update state with changed book
      this.setState(currentState => ({
        books: currentState.books
          .filter(book => book.id !== SelectedBook.id)
          .concat(SelectedBook)
      }));
    });
 

  }

  searchBook= (e) =>{
    e.preventDefault()
    const query = e.target.value
    this.setState({query: query })
    if(query){
    BooksAPI.search(query).then(response => {
      if(response.error)
      {
        console.log(response)
        this.setState({searchedBooks: []})
      }
      else{
        console.log(response)
      this.setState({searchedBooks: response}) 
      }
    })
    }
    if (!query){
      this.setState({searchedBooks: []})
    }

  }


  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() =>(
          <div className="list-books">
            <Header/>
            <div className="list-books-content">
             <Shelves books={this.state.books} changeShelf={this.changeShelf} />
            </div>
            <div className="open-search">
              <Link to ='/search' >
              <button>Add a book</button>
              </Link>
            </div>
          </div>          
         )}
        />
        <Route path='/search' render={() =>(
           <SearchBooks query={this.state.query} searchBook={this.searchBook} searchedBooks={this.state.searchedBooks} changeShelf={this.changeShelf} books={this.state.books}/>   
           )}
        />        
      </div>
    )
  }
}

export default BooksApp
