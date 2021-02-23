import React from 'react'

class ColoredBox extends React.Component {
  state = {
    color: 1
  }

  getColor = () => {
    if (this.state.color === 1) {
      return 'red';
    }
    if (this.state.color === 2) {
      return 'blue';
    }
    if (this.state.color === 3) {
      return 'green';
    }
  }

  render() {
    return <React.Fragment>
      <div style={{
        border:'1px black solid',
        width:'50px',
        height:'50px',
        backgroundColor: this.getColor()
      }}></div>
      <button onClick={this.changeValue} value={1}>Red</button>
      <button onClick={this.changeValue} value={3}>Green</button>
      <button onClick={this.changeValue} value={2}>Blue</button>
    </React.Fragment>
  }

  changeValue = (e) => {
      this.setState({
          'color':parseInt(e.target.value)
      })
  }

}

export default ColoredBox;