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

    // load books on comp mount
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
    render() {

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf shelfTitle="Currently Reading"/>
                        <Shelf shelfTitle="Want to Read"/>
                        <Shelf shelfTitle="Read"/>
                    </div>
                </div>
                <OpenSearch />
            </div>
        )
    }
}

export default Home
