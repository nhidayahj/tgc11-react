import React from 'react'

export default class AreaForm extends React.Component {
    state = {
        width: 0,
        height: 0
    }

    displayArea() {
        return this.state.height * this.state.width
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>Width: </label>
                    <input type="text" onChange={this.updateWidth} value={this.state.width} />
                </div>
                <div>
                    <label>Height: </label>
                    <input type="text" onChange={this.updateHeight} value={this.state.height} />
                </div>
                <div>
                    <h3>Area of Rectangle</h3>
                    {this.displayArea()}
                </div>

            </React.Fragment>
        )
    }

    updateWidth = (event) => {
        this.setState({
            width: event.target.value
        })
    }

    updateHeight = (event) => {
        this.setState({
            'height': event.target.value
        })
    }
}