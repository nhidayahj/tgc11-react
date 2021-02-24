import React from 'react'

// Class-based Component
// All class-based MUST have a render function to return 
// the JSX 
export default class NumBox extends React.Component {
    state={
        count:this.props.initialValue,
        message:"Write your message here."
    }

    // event handler - click MUST be an ARROW function
    clickMe = () => {
        this.setState({
            'count': this.state.count + 1
        })
    }

    render() {
        return <React.Fragment>
            <div onClick={this.clickMe} style={{
                border: "2px black solid",
                fontSize: `${10 + this.state.count * 5}px`,
                backgroundColor:"yellow",
                "padding":"3px",
                "width":"50px",
                "height":"50px"
            }}>{this.state.count}
            </div>
            {this.state.count % 2 == 0 ? <p>Number  is even </p> : null}
            <button onClick={this.clickMe}>Click me!</button>
            {/* Display message */}
            <div style={{
                border: "1px solid black",
                width:"100px"
            }}>
                {this.state.message}
            </div>
        </React.Fragment>
    }
}