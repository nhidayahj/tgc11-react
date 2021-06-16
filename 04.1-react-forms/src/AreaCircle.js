import React from 'react';

export default class AreaCircle extends React.Component {
    // to capture user inputs, decalre in state
    state = {
        radius: 0
    }

    // in any onChnage, the argument is always an Event 
    updateRadius = (event) => {
        // event.target.value always gives a string
        // console.log(event.target.value)
        
        // the setState will cause the STATE variable to be updated
        // and hence the render() is re-flashed onto the page
        this.setState({
            radius:event.target.value
        })
    }

    render() {
        return (
        <React.Fragment>
            <h3>Enter radius of a circle</h3>
            {/* The value attribute is the one that reads from the state variable and is 
            displayed for the user */}
            <input type="text" value={this.state.radius} 
            onChange={this.updateRadius}/>
            <div>
                Area of Circle = {3.14 * parseFloat(this.state.radius)}
            </div>
        </React.Fragment>
        )
    }
}