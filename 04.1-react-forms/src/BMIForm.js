import React from 'react';

class BMIForm extends React.Component {
    state = {
        weight: 0,
        height: 0
    }

    // event handlers -> arrow function
    updateBMI = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // can be arrow or normal function
    calcBMI() {
        return this.state.weight / (this.state.height * this.state.height)
    }

    BMIStatus() {
        let bmi = this.calcBMI();
        if (bmi < 18.5) {
            return "Underwight"
        } else if (bmi < 25) {
            return "Healthy"
        } else if (bmi < 30) {
            return "Overweight"
        } else {
            return "Obese"
        }
    }

    BMIstyle() {
        let bmi = this.calcBMI();
        if (bmi < 18.5) {
            return "blue"
        } else if (bmi < 25) {
            return "green"
        } else if (bmi < 30) {
            return "orange"
        } else {
            return "red"
        }
    }

    showResult() {
        if (this.state.weight > 0 && this.state.height >0) {
            return "block";
        } else {
            return "none";
        }
    }


    render() {
        return (
            <React.Fragment>
                <div>
                    <h2>Calculate BMI</h2>
                    <label>Weight: {' '}</label>
                    <input type="text" value={this.state.weight} name="weight" onChange={this.updateBMI} />
                    <label>Height: {' '}</label>
                    <input type="text" value={this.state.height} name="height" onChange={this.updateBMI} />
                </div>
                <div style={{
                    display:this.showResult()
                }}>
                    <p>Your BMI is: <span style={{
                        color: this.BMIstyle()
                    }}>{this.calcBMI()}</span></p>
                    <p>You are <span style={{
                        color:this.BMIstyle()
                    }}>{this.BMIStatus()}</span></p>
                </div>
            </React.Fragment>
        )
    }

}

export default BMIForm;