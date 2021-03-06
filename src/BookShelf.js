import React from 'react'
import Book from './Book'

const BookShelf = (props) => {
  const { books, title, shelf, onUpdateBook } = props
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book
              book={book}
              key={book.id}
              image={book.imageLinks}
              title={book.title}
              authors={book.authors}
              shelf={shelf}
              onUpdateBook={onUpdateBook}
            />             
          ))}
        </ol>
      </div>
    </div>        
  )
}

export default BookShelf