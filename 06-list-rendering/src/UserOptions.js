import React from 'react'

export default class UserOptions extends React.Component {
    // non-state variables
    state = {
        color: "",
        country: "",
        fruits: []
    }
    countries = [
        {
            'display': 'Singapore',
            'value': 'singapore'
        },
        {
            'display': 'Malaysia',
            'value': 'malaysia'
        },
        {
            'display': 'Indonesia',
            'value': 'indonesia'
        }
    ]

    fruits = [
        {
            'display': 'Apple',
            'value': 'apple'
        },
        {
            'display': 'Banana',
            'value': 'banana'
        },
        {
            'display': 'Cherries',
            'value': 'cherries'
        }
    ]

    colours = [
        {
            'display': 'Red',
            'value': 'red'
        },
        {
            'display': 'Green',
            'value': 'green'
        },
        {
            'display': 'Blue',
            'value': 'blue'
        }
    ]

    selectColor = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    selectCountry = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    // using for loop to list-render
    renderColors() {
        let options = [];
        // using the 'for' loop
        for (let colour of this.colours) {
            let e = (
                <React.Fragment key={colour.value}>
                    <input type="radio" name="color" value={colour.value}
                        checked={this.state.color === colour.value}
                        onChange={this.selectColor} />
                    <span>{colour.display}</span>
                </React.Fragment>
            )
            options.push(e)
        }
        return options;
    }

    updateFruitCheckbox = (e) => {
        let selectFruits = this.state.fruits;
        let cloneFruits;
        if (selectFruits.includes(e.target.value) === false) {
            cloneFruits = [...selectFruits];
            cloneFruits.push(e.target.value)
        } else {
            cloneFruits = selectFruits.filter((f) => {
                return f !== e.target.value
            })
        }
        this.setState({
            fruits: cloneFruits
        })

    }

    // the country uses the map function for the dictionary list 

    render() {
        return (
            <React.Fragment>
                <div>
                    <h2>Color List: </h2>
                    {this.renderColors()}
                </div>
                <div>
                    <h2>Select country: </h2>
                    <select name="country" value={this.state.country} onChange={this.selectCountry}>
                        {this.countries.map((c) => {
                            return <option key={c.value} value={c.value}>{c.display}</option>
                        })}
                    </select>
                </div>
                <div>
                    <h2>Fruit List</h2>
                    {this.fruits.map((f) => (
                        <div>
                            <input type="checkbox" name="fruits" value={f.value} key={f.value}
                                checked={this.state.fruits.includes(f.value)}
                                onChange={this.updateFruitCheckbox} />
                            <span>{f.display}</span>
                        </div>
                    ))}
                </div>

            </React.Fragment>
        )
    }
}