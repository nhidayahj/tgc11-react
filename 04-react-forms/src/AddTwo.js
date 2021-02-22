// using 2 separate functions 

import React from 'react'

export default class AddTwo extends React.Component {
    state = {
        'num1':0,
        'num2':0,
        'sum':0
    }
    render() {
        return (
            <React.Fragment>
                <div>
                <label>Num1: </label>
                <input type="text" value={this.state.num1} onChange={this.updateNum1}/> 
                <label>Num2:</label>
                <input type="text" value={this.state.num2} onChange={this.updateNum2}/> 
                </div>
                Sum of two numbers is: {parseInt(this.state.num1) + parseInt(this.state.num2)}
                
            </React.Fragment>
        )
    }
    updateNum1 = (event) => {
        this.setState({
            'num1':event.target.value
        })
    }
    updateNum2 = (event) => {
        this.setState({
            'num2':event.target.value
        })
    }

}