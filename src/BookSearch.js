import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import sortBy from 'sort-by'

class BookSearch extends Component {
  state = {
    query: '',
    books: []
  }

  searchBooks = (term) => {
    if(term){
      BooksAPI.search(term, 0).then((books) => {
        if (books && books.length ){  
          this.setState({ books : books.sort(sortBy('title')) })   
        } else {
          this.setState({ books : [] })   
        }
      })
    } else {
      this.setState({ books : [] })
    }
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    this.searchBooks(query)
  }

  clearQuery = () => {
    this.setState({
      query: '',
      books: []
    })
  }

  render() {
    const { books, query } = this.state
    const { onUpdateBook, idShelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
          >Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {(books.length > 0) && (
            <ol className="books-grid">
              {books.map((book) => (
                <Book
                  book={book}
                  key={book.id}
                  image={book.imageLinks}
                  title={book.title}
                  authors={book.authors}
                  shelf={idShelf[book.id] ? idShelf[book.id] : "none"}
                  onUpdateBook={(book, event) => {
                    onUpdateBook(book, event)
                  }}
                />             
              ))}
            </ol>
          )}            
        </div>
      </div>
    ) 
  }
}

export default BookSearch