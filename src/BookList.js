import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'             

const BookList = (props) => {
  const { books, onUpdateBook } = props
  const shelves = [
    {
      tag: "currentlyReading",
      title: "Currently Reading"
    },
    {
      tag: "wantToRead",
      title: "Want to Read"
    },
    {
      tag: "read",
      title: "Read"
    }
  ]

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {shelves.map((shelf, index) => (
          <BookShelf key={shelf.tag + index}
            shelf={shelf.tag} 
            title={shelf.title}
            books={books.filter((book) => book.shelf === shelf.tag)}
            onUpdateBook={onUpdateBook}
          />
        ))}
      </div>
      <div className="open-search">
        <Link
          to="/search"
          className="open-search"
        >Add a book</Link>              
      </div>
    </div>       
  )
}

export default BookList