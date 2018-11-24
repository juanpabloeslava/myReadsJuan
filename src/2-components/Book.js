import React from 'react'
// views and components
// data
// import * as BooksAPI from './BooksAPI'

class Book extends React.Component {

    bookAuthor = (book) => {
        if (book.authors) {
            const string = (book.authors.length === 1) ? book.authors : `${book.authors[0]} , et al.`;
            return string
        } else {
            return 'Unkown Author(s)'
        }
    }
    
    bookTitle = (book) => {
        return book.title ? book.title : 'Unkown Title';
    }

    bookCover = (book) => {
        const placeholder = "http://via.placeholder.com/128x193?text=No%20Cover";
        return book.imageLinks ? book.imageLinks.thumbnail : placeholder
    }

    bookShelf = (book) => {
        return book.shelf ? book.shelf : "none";
    }

    selectChange = () => {
        console.log ('This book will change shelves');
    }

    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={
                                {
                                    width: 128,
                                    height: 188,
                                    backgroundImage: `url(${this.bookCover(this.props.thisBook)})`
                                }
                            }>
                        </div>
                        <div className="book-shelf-changer">
                            <select 
                                value={this.bookShelf(this.props.thisBook)}
                                onChange={this.selectChange}
                            >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.bookTitle(this.props.thisBook)}</div>
                    <div className="book-authors">{this.bookAuthor(this.props.thisBook)}</div>
                </div>
            </li>
        )
    }
}

export default Book
