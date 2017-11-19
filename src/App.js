import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import BookSearch from './BookSearch'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books : [],
    idShelfObj : {}
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ idShelfObj : this.getShelves(books)})
      this.setState({ books })
    })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then((books) => {
      BooksAPI.getAll().then((books) => {
        this.setState({ idShelfObj : this.getShelves(books)})
        this.setState({ books })
      })
    })
  }

  getShelves = (books) => {
    const idObj = {}
    books.map(function (e) {
      return idObj[e.id] = e.shelf
    })
    return idObj
  }

  render() {
    const { books, idShelfObj } = this.state

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList 
            books={books}
            onUpdateBook={this.updateBook}
          />
        )}/>
        <Route path="/search" render={() => (
          <BookSearch
            books={books}
            idShelf={idShelfObj}
            onUpdateBook={this.updateBook}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
