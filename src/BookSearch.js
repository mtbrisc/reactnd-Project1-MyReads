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
          let merged_books = [];
          for(var i in books){
             let shared = false;
             for (var j in this.props.books)
                 if (this.props.books[j].id === books[i].id) {
                     shared = true;
                     break;
                 }
             if(!shared) merged_books.push(books[i])
          }
          merged_books = merged_books.concat(this.props.books);          
          this.setState({books: books.sort(sortBy('name'))});    
        } else {
          this.clearQuery();
        }
      })
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
          {(books.length > 0) && (
            <ol className="books-grid">
              {books.map((book) => (
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