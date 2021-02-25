import React from 'react'

export default class Library extends React.Component {
  state = {
    'books': [
      {
        'id': 101,
        'title': 'Dune',
        'author': 'Frank Herbert',
        'genre': 'science-fiction',
        'tags':['futuristic', 'classics']
      },
      {
        'id': 102,
        'title': 'The Lord of the Rings: The Fellowship of the Ring',
        'author': 'J.R.R Tolkien',
        'genre':'fantasy',
        'tags':['door-stopper', 'trilogy']
      }
    ]
  }

  addBook = () => {

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
    
  }

  render() {
    return <React.Fragment>
      <div class="container">
        <div class="col">
            {this.displayBooks()}
        </div>

        <div class="col">

          <h3>Add Book</h3>
          <div>
            <label>Title:</label>
            <input type="text" name="title" />
          </div>
          <div>
            <label>Author</label>
            <input type="text" name="author"/>
          </div>
          <div>
            <label>Genre</label>
            <input type="radio" name="genre" value="fantasy"/><label>Fantasy</label>
            <input type="radio" name="genre" value="science-fiction"/><label>Fantasy</label>
              <input type="radio" name="romance" value="fantasy"/><label>Romance</label>
          </div>
          <div>
            <label>Tags</label>
            <input type="checkbox" name="tags" value="classic"/><label>Classic</label>
            <input type="checkbox" name="tags" value="doorstopper"/><label>Doorstopper</label>
            <input type="checkbox" name="tags" value="futuristic"/><label>futuristic</label>
            <input type="checkbox" name="tags" value="trilogy"/><label>trilogy</label>
          </div>
          <button>Add Book</button>
        </div>
      </div>
    </React.Fragment>
  }
}