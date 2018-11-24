import React from 'react'
// views and components
import Book from '../2-components/Book'
// data
// import * as BooksAPI from './BooksAPI'

class Shelf extends React.Component {

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.props.booksInShelf.map ( book => (
                                <Book 
                                    key={book.id} 
                                    thisBook={book}
                                />
                            ))
                        }
                                <li>
                                    there are {this.props.booksInShelf.length} book in this shelf
                                </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf
