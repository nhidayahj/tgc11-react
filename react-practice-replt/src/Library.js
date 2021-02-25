import React from 'react'

export default class Library extends React.Component {
    state = {
        'books': [
            {
                'id': 101,
                'title': 'Dune',
                'author': 'Frank Herbert',
                'genre': 'science-fiction',
                'tags': ['futuristic', 'classics']
            },
            {
                'id': 102,
                'title': 'The Lord of the Rings: The Fellowship of the Ring',
                'author': 'J.R.R Tolkien',
                'genre': 'fantasy',
                'tags': ['door-stopper', 'trilogy']
            }
        ],
        title:'',
        author:'',
        genre:'',
        tags:[],
        book_id:0

    }
    
    // this will update ALL the details of the book
    addBook = (e) => {
        let newBookTags =[];
         this.setState({
             [e.target.name]:e.target.value
         })
    }

    updateBook = () => {

    }

    displayEditBook = () => {

    }

    cancelEditBook = () => {

    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    displayBooks = () => {
        let bookList = []
        for (let i of this.state.books) {
            bookList.push(
                <div>
                    <ul>
                        <li><label>ISBN: {i.id}</label></li>
                        <li><label>Title: {i.title}</label></li>
                        <li><label>Author: {i.author} </label></li>
                        <li><label>Genre: {i.genre}</label></li>
                        <li><label>Tags: {i.tags.join(", ")}</label></li>
                    </ul>
                </div>)
        }
        return bookList;
    }

    render() {
        return <React.Fragment>
            <div class="container">
                <div class="col">
                    <h2>List Of Books</h2>
                    {this.displayBooks()}
                </div>

                <div class="col">

                    <h3>Add Book</h3>
                    <div>
                        <label>Title:</label>
                        <input type="text" name="title" value={this.state.title}/>
                    </div>
                    <div>
                        <label>Author</label>
                        <input type="text" name="author" value={this.state.author}/>
                    </div>
                    <div>
                        <label>Genre</label>
                        <input type="radio" name="genre" value="fantasy" checked={this.state.genre === 'fantasy'} /><label>Fantasy</label>
                        <input type="radio" name="genre" value="science-fiction" checked={this.state.genre==="science-fiction"} /><label>Science Fiction</label>
                        <input type="radio" name="genre" value="romance" checked={this.state.genre==="romance"} /><label>Romance</label>
                    </div>
                    <div>
                        <label>Tags</label>
                        <input type="checkbox" name="tags" value="classic" /><label>Classic</label>
                        <input type="checkbox" name="tags" value="doorstopper" /><label>Doorstopper</label>
                        <input type="checkbox" name="tags" value="futuristic" /><label>futuristic</label>
                        <input type="checkbox" name="tags" value="trilogy" /><label>trilogy</label>
                    </div>
                    <button onClick={this.addBook}>Add Book</button>
                </div>
            </div>
        </React.Fragment>
    }
}