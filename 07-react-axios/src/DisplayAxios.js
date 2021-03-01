import React from 'react'
import axios from 'axios'

export default class DisplayAxios extends React.Component {
    state = {
        name: "",
        colour: "",
        country: "",
        fruits: [],
        all_fruits: [],
        all_countries: [],
        all_colours: []
    }


    updateField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // add function to load data from axios
    // componentDidMount() - initialise our component with initial data
    async componentDidMount() {
        let response = await axios.get('./json/countries.json');
        let all_countries = response.data;

        // get the colours 
        response = await axios.get('./json/colours.json')
        let all_colours = response.data

        // get the fruits 
        response = await axios.get('./json/fruits.json')
        let all_fruits = response.data



        // set the new state from the response obtained from axios
        // this cause a chnage in the state variable
        // which will call the render() function
        this.setState({
            'all_countries': all_countries,
            'all_colours': all_colours,
            'all_fruits': all_fruits
        })
    }

    // render the fruits list 
   updateFruitCheckbox = (e) => {
       
   }

    // render country list
    renderCountryList() {
        let displayCountry = [];
        for (let c of this.state.all_countries) {
            let e = (
                <React.Fragment>
                    <option name="country" key={c.value} value={c.value}>{c.display}</option>
                </React.Fragment>
            )
            displayCountry.push(e)
        }
        return displayCountry;
    }


    render() {
        return (
            <React.Fragment>
                <div>
                    <label>Username: </label>
                    <input type="text" name="name"
                        value={this.state.name} onChange={this.updateField} />
                </div>
                {/* Select Dropdown */}
                <div>
                    <label>Select your country: </label>
                    <select name="country" value={this.state.country} onChange={this.updateField}>
                        {this.renderCountryList()}
                    </select>
                </div>
                {/* Colour Radios */}
                <div>
                    <label>Your favourite colour: </label>
                    {this.state.all_colours.map((color) => (
                        <React.Fragment key={color.value}>
                            <input type="radio" name="colour" value={color.value}
                                onChange={this.updateField} checked={this.state.colour === color.value} />
                            <span>{color.display}</span>
                        </React.Fragment>
                    ))}
                </div>

                {/* Fruits Checkboxes */}
                <div>
                    <p>
                        <label>Fruits List: </label>
                        
                        {this.state.all_fruits.map((f) => (
                            <React.Fragment>
                                
                                <input type="checkbox" name="fruits" value={this.state.fruits}
                                    checked={this.state.fruits === f.value} onChange={this.updateFruitCheckbox} />
                                <span>{f.display}</span>
                            </React.Fragment>

                        ))}
                    </p>

                </div>

            </React.Fragment>
        )

    }



}