import React from 'react'

export default class NumberBox extends React.Component {
    state = {
        value: this.props.initialValue
    }

    increase = () => {
        this.setState({
            'value': this.state.value + 1
        })
    }

    decrease = () => {
        this.setState({
            'value': this.state.value - 1
        })
    }
    render() {
        return (
            <React.Fragment>
                <p style={{
                    border: "1px solid black",
                    padding: "3px",
                    width: "50px",
                    "height": "50px"
                }}>{this.state.value}</p>
                <button onClick={this.increase}>Increase!</button>
                <button onClick={this.decrease}>Decrease!</button>
                {this.state.value % 2 === 0 ? <p style={{color:"blue"}}>Number is even</p> : <p style={{color:"red"}}>Number is odd</p>}
            </React.Fragment>

        )
    }
}