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
            searchQuery: ""
        }
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
                        this.setState({ books: [] });
                    }
                    else {
                        // if there's no error in the response, change the state.books to the
                        //  response
                        this.setState({ books: resp });
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        } else {
            this.setState({ books: [] })
        }
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
                            this.state.books.map(book => (
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

export default Search
