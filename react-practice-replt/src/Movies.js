import React from 'react'

// Add Objects to List

export default class Movies extends React.Component {
    state = {
    'movies':[
      {
        'title':'Star Wars IV: A New Hope',
        'director': 'George Lucas'
      },
      {
        'title':'The Lord of the Rings: The Fellowship of the Ring',
        'director':'Peter Jackson'
      }
    ],
    title:"",
    director:""
  }

  addMovie = () => {
    // 1. create the new movie object.
    // hint: replace the null below with the correct code
    // hint 2: where is the data for the new movie currently stored?

    let newMovie = {
      title: this.state.title,
      director: this.state.director
    }

    // 2. clone the array
    let cloneMovieArr = [...this.state.movies]
    // 3. add the new movie object at the back of the cloned array
    console.log(newMovie)
    cloneMovieArr.push(newMovie)
    // 4. set the cloned array back into the state
    this.setState({
        'movies':cloneMovieArr
    })
  }

  updateFormField = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render() {
    return <React.Fragment>
      {this.state.movies.map(m=>(
        <React.Fragment>
          <div class="movie">
            <h1>{m.title}</h1>
            <h2>Directed by {m.director}</h2>
          </div>
        </React.Fragment>
      ))}

      <h3>Add New Movie</h3>
      <div>
        <label>Movie Title:</label>
        <input type="text" name="title" value={this.state.title} onChange={this.updateFormField}/>
      </div>
      <div>
        <label>Director</label>
        <input type="text" name="director" value={this.state.director} onChange={this.updateFormField}/>
      </div>
      <button onClick={this.addMovie}>Add Movie</button>
    </React.Fragment>
  }
}