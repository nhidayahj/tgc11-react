import React from 'react'

class CircleForm extends React.Component {
    // to capture inputs from user,
    // must be in the state
    state = {
        radius: 0
    }
    render(){
        return (
            <React.Fragment>
                <input type="text" value={this.state.radius} />
            </React.Fragment>
        )
    }

}

export default CircleForm;