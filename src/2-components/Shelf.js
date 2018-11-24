import React from 'react'
// views and components
import Book from '../2-components/Book'
// data
// import * as BooksAPI from './BooksAPI'

class Shelf extends React.Component {

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">
                    {/* use title prop passed during invocation in Home */}
                    {this.props.shelfTitle}
                </h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            // use props passed during invocation in Home
                            this.props.booksInShelf.map ( book => (
                                <Book 
                                    // pass 3 props for:
                                    // - key(otherwise it throws an error)
                                    // - individual book (it'll then have all books data as an object)
                                    // - moveBook Method (originally in Home and Search)
                                    key={book.id} 
                                    thisBook={book}
                                    moveBook={this.props.moveBook}
                                />
                            ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf
