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
        if (book.title) {
            return book.title;
        } else {
            return 'Unkown Title';
        }   
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
                                    backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")'
                                }
                            }>
                        </div>
                        <div className="book-shelf-changer">
                            <select>
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
                    {/* <div className="book-title">{this.props.thisBook.title}</div>
                    <div className="book-authors">{this.props.thisBook.authors}</div> */}
                </div>
            </li>
        )
    }
}

export default Book
