import React from 'react'


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
        director: ""
    }
    updateMovie = () => {
        // 1. create the updated movie object.
        // hint: replace the null below with the correct code
        // hint 2: where is the data for the new movie currently stored?
        let updatedMovie = {
            title: this.state.title,
            director: this.state.director
        }

        // 2. find the original index of the updated movie

        // 3. clone the array

        // 4. add the updated movie object back to its original index in
        // the array

        // 5. set the cloned array back into the state
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // create a pop-up form
    beginEditMovie = () => {
        return (
            <React.Fragment>
                <div id="popup"
                style={{display: this.state.beginEditMovie ? 'block' : 'none'}}>

                </div>
            </React.Fragment>
        )

    }

    render() {
        return <React.Fragment>
            <div class="container">
                <div class="col">
                    {this.state.movies.map(m => (
                        <React.Fragment>
                            <div class="movie">
                                <h1>{m.title} <button onClick={this.beginEditMovie}>Edit</button></h1>
                                <h2>Directed by {m.director}</h2>
                            </div>
                        </React.Fragment>
                    ))}
                </div>

                <div class="col">

                    <h3>Edit Movie</h3>
                    <div>
                        <label>Movie Title:</label>
                        <input type="text" name="title" value={this.state.title} onChange={this.updateFormField} />
                    </div>
                    <div>
                        <label>Director</label>
                        <input type="text" name="director" value={this.state.director} onChange={this.updateFormField} />
                    </div>
                    <button onClick={this.updateMovie}>Update Movie</button>
                </div>
            </div>
        </React.Fragment>
    }
}