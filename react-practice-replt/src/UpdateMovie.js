import React from 'react'
import './updateMovie.css'


export default class UpdateMovie extends React.Component {
    state = {
        'movies': [
            {
                'id': 101,
                'title': 'Star Wars IV: A New Hope',
                'director': 'George Lucas'
            },
            {
                'id': 102,
                'title': 'The Lord of the Rings: The Fellowship of the Ring',
                'director': 'Peter Jackson'
            }
        ],
        title: "",
        director: "",
        editing: false,
    }
    updateMovie = () => {
        // 1. create the updated movie object.
        // hint: replace the null below with the correct code
        // hint 2: where is the data for the new movie currently stored?
        let updatedMovie = {
            title: this.state.editMovieTitle,
            director: this.state.editDirector,
            movieId: this.state.movieId
                     
        }

        // 2. find the original index of the updated movie
        
        // 3. clone the array
        let clonedArr = [...this.state.movies]
        // 4. add the updated movie object back to its original index in the array 
        let index = -1;
        for (let i=0; i<this.state.movies.length; i++) {
            let currentMovie = this.state.movies[i]
            if(currentMovie.id == updatedMovie.movieId) {
                index = i;
                break;
            }
        }

        clonedArr[index] = updatedMovie
        // 5. set the cloned array back into the state
        this.setState({
            'movies':clonedArr
        })
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    beginEditMovie = (movie) => {
        this.setState({
            'editing': true,
            'editMovieTitle':movie.title,
            'editDirector':movie.director,
            'movieId':movie.id
        })
    }

    showEditMovieForm() {
        if (this.state.editing == true) {
            return 'block'
        } else {
            return 'none';
        }

    }

    render() {
        return <React.Fragment>
            <div class="container">
                <div class="col">
                    {this.state.movies.map(m => (
                        <React.Fragment>
                            <div class="movie" key={m.id}>
                                <h1>{m.title} <button onClick={() => this.beginEditMovie(m)}>Edit</button></h1>
                                <h2>Directed by {m.director}</h2>
                            </div>
                        </React.Fragment>
                    ))}
                </div>

                <div class="col" style={{display: this.showEditMovieForm()}}>

                    <h3>Edit Movie</h3>
                    <div>
                        <label>Movie Title:</label>
                        <input type="text" name="editMovieTitle" value={this.state.editMovieTitle} onChange={this.updateFormField} />
                    </div>
                    <div>
                        <label>Director</label>
                        <input type="text" name="editDirector" value={this.state.editDirector} onChange={this.updateFormField} />
                    </div>
                    <button onClick={this.updateMovie}>Update Movie</button>
                </div>
            </div>
        </React.Fragment>
    }
}