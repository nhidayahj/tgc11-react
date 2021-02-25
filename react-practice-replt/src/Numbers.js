import React from 'react'

export default class Numbers extends React.Component{
    state = {
    allNumbers:[1,3,5,7],
    newNumber:0
  }

  addRandom = ()=> {
    // 1. clone the allNumbers array in the state
    let clonedArr = [...this.state.allNumbers]
    // 2. add a random number to the back of the clone
    let randomNumber = Math.floor(Math.random() * 10 + 1)
    clonedArr.push(randomNumber)
    // 3. set the cloned array back into the state
    this.setState({
        'allNumbers':clonedArr
    })
  }

  addNewNumber = (e) => {
      this.setState({
          'newNumber':e.target.value,
      })
  }

  addToNewList = () => {
       let cloneArr = [...this.state.allNumbers]
       cloneArr.push(parseInt(this.state.newNumber))
       this.setState({
           'allNumbers':cloneArr
       })
  }

  render() {
    return <React.Fragment>
      <ul>
        {this.state.allNumbers.map(number=><li>{number}</li>)}
      </ul>
      <div>
         <button onClick={this.addRandom}>Add Random</button>
      </div>
      <div>
         <input type="text" name="newNumber" value={this.state.newNumber} onChange={this.addNewNumber}/>
         <button onClick={this.addToNewList}>Add</button>
      </div>
    </React.Fragment>
  }
}
