import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class BookSearch extends Component {
  state = {
    query: '',
    searchResults: [],
    idMap: {}
  }

  searchBooks = (term) => {

    (
      term && BooksAPI.search(term, 20).then((searchResults) => {
        this.setState({ searchResults })
      })
    ) || (
      this.clearQuery()
    )
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    this.searchBooks(query)
  }

  clearQuery = () => {
    this.setState({
      query: '',
      searchResults: []
    })
  }  

  render() {
    const { searchResults, query } = this.state
    const { onUpdateBook } = this.props

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
          {(searchResults.length > 0) && (
            <ol className="books-grid">
              {searchResults.map((book) => (
                <Book
                  book={book}
                  key={book.id}
                  image={book.imageLinks}
                  title={book.title}
                  authors={book.authors}
                  shelf={book.shelf}
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