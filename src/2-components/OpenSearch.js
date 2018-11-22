import React from 'react'
import { Link } from 'react-router-dom'
// views and components
// data

class Search extends React.Component {

    render() {

        return (
            <div className="open-search">
                <Link className="open-search-link" to="/search">Add a book</Link>
            </div>
        )
    }
}

export default Search
