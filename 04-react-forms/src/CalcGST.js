import React from 'react'

// create a class-based component
class CalcGST extends React.Component {
    // anything to show and change 
    // that requires user input
    state = {
        bill:0
    }
    calcGST() {
        return this.state.bill * 0.07
    }
    render() {
        <React.Fragment>
            <div>
                <label>Bill: </label>
                <input type="text" name="bill" value={this.state.bill}/>
            </div>
            <div>
                <label>GST Amount</label>
                <input type="text" name="gst" value={this.calcGST()}/>
            </div>


        </React.Fragment>

    }
}


export default CalcGST;