import React from 'react'

export default class RemoveNum extends React.Component {
    state = {
        allNumbers: [1, 3, 5, 7, 14, 15]
    }

    removeAtRandom = () => {
        // 1. pick a random index to remove
        let indexToRemove = Math.floor(Math.random() * this.state.allNumbers.length);

        // 2. clone the allNumbers array from the state
        let clonedArr = this.state.allNumbers.slice()

        // 3. remove the number specified at  the index in the `indexAtRemove` variable
        clonedArr.splice(indexToRemove,1)
        // 4. set the clone back into the state
        this.setState({
            'allNumbers':clonedArr
        })
    }

    render() {
        return <React.Fragment>
            <ul>
                {this.state.allNumbers.map(number => <li>{number}</li>)}
            </ul>
            <div>
                <button onClick={this.removeAtRandom}>Remove Random</button>
            </div>
        </React.Fragment>
    }
}