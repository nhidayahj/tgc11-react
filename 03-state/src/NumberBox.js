import React from 'react'


// a CLASS-based component 

class NumberBox extends React.Component {
    state = {
        'count': 10
    }
    render() {
        return (
            <React.Fragment>
                <div style={{
                    "border": "2x solid black",
                    "padding": "10px",
                    "width": '25px'
                }}>
                    {this.state.count}
                </div>
                <button onClick={this.increment}>Increment</button>
            </React.Fragment>

        )

    }

    increment = () => {
        // we have to use setState to chnage the value of the state variable  
        //setState is ASYNC 
        this.setState({
            'count': this.state.count + 1 
        })
    }
}




export default NumberBox