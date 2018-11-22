import React from 'react'
// views and components
import OpenSearch from '../2-components/OpenSearch'
import Shelf from '../2-components/Shelf'
// data
// import * as BooksAPI from './BooksAPI'

class Home extends React.Component {

    render() {

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf />                        
                    </div>
                </div>
                <OpenSearch />
            </div>
        )
    }
}

export default Home
