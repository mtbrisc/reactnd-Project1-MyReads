import React, { Component } from 'react'

class Book extends Component {
  render() {
    const { id, image, shelf, book, title, authors, onUpdateBook } = this.props   
    return (
      <li key={id}>
        <div className="book">
          <div className="book-top">
            <img className="book-cover" src={
               image ? image.thumbnail : 'https://dummyimage.com/128x193/dddddd/dddddd.jpg&text=+'
            } alt=""/>
            <div className="book-shelf-changer">
              <select value={shelf} onChange={(event) => onUpdateBook(book, event.target.value)}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    )
  }
}

export default Book