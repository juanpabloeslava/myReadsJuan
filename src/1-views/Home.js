import React from 'react'
// views and components
import OpenSearch from '../2-components/OpenSearch'
import Shelf from '../2-components/Shelf'
// data
import * as BooksAPI from '../BooksAPI'

class Home extends React.Component {
    // constructor
    constructor(props) {
        super(props);

        this.state = {
            books: []
        }
    }

    // load our books on comp mount
    componentDidMount() {
        // call the API
        BooksAPI.getAll()
            .then(resp => {
                this.setState({
                    books: resp
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    // Manage books Method:
    // move books between shelves (and from search page to shelves)
    // passed down as prop to Shelf, and from Shelf as prop to Book
    moveBook = (book, targetShelf) => {
        console.log(`The book '${book.title}' will be moved to the '${targetShelf}' shelf.`);
        // call method from API
        BooksAPI.update(book, targetShelf)
            .then((resp) => {
                // console.log(resp); // the response is given with book keys
                // pass desired shelf as the new .shelf prop for the book
                book.shelf = targetShelf;
                this.setState(state => ({
                    books: state.books
                        .filter( newBook => 
                            // just if new book is not the same as old one
                            newBook.id !== book.id
                        )
                        .concat([book])
                }));
            })
            .catch(error => {
                console.log(error);
            })
    }
    
    render() {

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf 
                            // pass 2 props for title and books
                            shelfTitle="Currently Reading"
                            booksInShelf={
                                this.state.books.filter( book => 
                                    book.shelf === 'currentlyReading'    
                                )
                            } 
                            moveBook={this.moveBook}
                        />
                        <Shelf 
                            shelfTitle="Want to Read" 
                            booksInShelf={
                                this.state.books.filter( book => 
                                    book.shelf === 'wantToRead'    
                                )
                            }
                            moveBook={this.moveBook}
                        />
                        <Shelf 
                            shelfTitle="Read" 
                            booksInShelf={
                                this.state.books.filter( book => 
                                    book.shelf === 'read'    
                                )
                            }
                            moveBook={this.moveBook}
                        />
                    </div>
                </div>
                <OpenSearch />
            </div>
        )
    }
}

export default Home
