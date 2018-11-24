import React from 'react'
import { Link } from 'react-router-dom'
// views and components
import Book from '../2-components/Book'
// data
import * as BooksAPI from '../BooksAPI'

class Search extends React.Component {
    // constructor
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            results: [],
            searchQuery: ""
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

    // Method: show results
    showResults = (e) => {
        const query = e.target.value;
        // set state
        this.setState({ searchQuery: query });
        if (query.trim()) {
            // search for more books from the API
            BooksAPI.search(query)
                .then(resp => {
                    // if there's an error, keep the state.books empty
                    if (resp.error) {
                        this.setState({ results: [] });
                    }
                    else {
                        // if there's no error in the response, change the state.books to the
                        //  response
                        this.setState({ results: resp });
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        } else {
            this.setState({ results: [] })
        }
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
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.searchQuery}
                            onChange={(e) => (this.showResults(e))}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.results.map(book => (
                                <Book
                                    // pass 3 props for:
                                    // - key(otherwise it throws an error)
                                    // - individual book (it'll then have all books data as an object)
                                    // - moveBook Method directly from Search
                                    key={book.id} 
                                    thisBook={book}
                                    moveBook={this.moveBook} 
                                />
                            ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search
