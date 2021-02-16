import React from 'react'

class NumberBox extends React.Component {
    'state' = {
        'count':this.props.count,
        'color':this.props.color
    }

    render() {
        return (
            <React.Fragment>
                <div style={{
                    'border':"2px solid blue",
                     'padding':"10px",
                     'width':"25px",
                     'color':this.props.color
                     
                }}>
                    {this.state.count}
                </div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </React.Fragment>
        )
    }

    increment = () => {
        this.setState({
            'count':this.state.count + 1
            
        })
    }

    decrement = () => {
        this.setState({
            'count':this.state.count - 1
        })
    }

}


export default NumberBox;