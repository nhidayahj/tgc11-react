import React from 'react'

export default class WaterDispense extends React.Component {
    state = {
        'displayMessage': "",
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>Drink Vending Machine</h1>
                    <div className="display">
                        <h3>{this.state.displayMessage}</h3>
                    </div>
                    <button onClick={this.changeType} value="dispensing coffee">Coffee</button>
                    <button onClick={this.changeType} value="dispensing tea">Tea</button>
                    <button onClick={this.changeType} value="dispensing juice">Orange Juice</button>
                </div>
            </React.Fragment>
        )
    }
    

    changeType = (e) => {
        this.setState({
            'displayMessage':e.target.value
        })
    }
 

}