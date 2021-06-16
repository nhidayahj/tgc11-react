import React from 'react';

class AddTwo extends React.Component {
    state = {
        num_one: 0,
        num_two: 0,
        sum: 0
    }

    updateNum = (event) => {
        console.log(event)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addTwo = () => {
        let sum = parseFloat(this.state.num_one) + parseFloat(this.state.num_two)
        this.setState({
            'sum': sum
        })
    }


    render() {
        return (
            <React.Fragment>
                <h1>Add Two Numbers</h1>
                <h3>Enter any 2 numbers</h3>
                <input type="text" value={this.state.num_one} name="num_one" onChange={this.updateNum} />
                <input type="text" value={this.state.num_two} name="num_two" onChange={this.updateNum} />
                <button onClick={this.addTwo}>Add</button>
                <p>The total 2 numbers: {this.state.sum}</p>
            </React.Fragment>
        )
    }
}

export default AddTwo;