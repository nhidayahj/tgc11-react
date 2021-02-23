import React from 'react'

export default class AirQuality extends React.Component {
  state = {
    psi:0
  }
  render() {
    return (
      <React.Fragment>
      <div>
        <label>Enter the PSI:</label>
        <input type="text" value={this.state.psi} onChange={(e)=>{
          this.setState({
            'psi': e.target.value
          })
        }}/>
      </div>
      <h1>Air Quality</h1>
      <div id="air-quality" style={{
        color:this.getAirQualityColor()
      }}>{this.getAirQualityText()}</div>
      </React.Fragment>
    )}
    
  getAirQualityText = () => {
      if (this.state.psi <= 50 ){
          return "Healthy"
      } else if (this.state.psi < 150) {
          return "Moderate"
      } else if (this.state.psi < 200) {
          return "Unhealthy"
      } else if (this.state.psi >= 200 ) {
          return "Hazardous"
      } else {
        return "undefined";
      }
  }

  getAirQualityColor = () => {
    if (this.state.psi <= 50 ){
          return 'green'
      } else if (this.state.psi < 150) {
          return "yellow"
      } else if (this.state.psi < 200) {
          return "orange"
      } else if (this.state.psi >= 200 ) {
          return "red"
      } else {
        return "black";
      }
  }
}