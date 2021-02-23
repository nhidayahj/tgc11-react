import React from 'react'
import './dice.css'

export default class Dice extends React.Component {
    state={
        number:0,
        number2:0,
        number3:0
    }
    generateRandNum() {
        return Math.floor(Math.random() * 6) + 1
    }
 
    render() {
        return (
            <React.Fragment>
                {/* Dice 1 */}
                <div className="dice">
                    {this.state.number}
                </div>
                <button onClick={this.generateNum} value={this.generateRandNum()} name="number">Generate</button> 
                {/* Dice 2 */}
                <div className="dice">
                    {this.state.number2}
                </div>
                <button onClick={this.generateNum} value={this.generateRandNum()} name="number2">Generate</button> 

                {/* Dice 3 */}
                <div className="dice">
                    {this.state.number3}
                </div>
                <button onClick={this.generateNum} value={this.generateRandNum()} name="number3">Generate</button> 

            </React.Fragment>
        )
    }

    generateNum = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }


}