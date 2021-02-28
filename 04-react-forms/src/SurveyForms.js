import React from 'react'

class SurveyForms extends React.Component {
    state = {
        'fname': "",
        'lname': "",
        'color': '',
        'country': '',
        'display': false
    }

    updateForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    alertForm = () => {
        return alert(
            "Your first name: " + this.state.fname +
            " Your last name: " + this.state.lname +
            " Your fovourite color: " + this.state.color +
            " Your chosen destination: " + this.state.country
        )
    }

    submitForm = () => {
        this.setState({
            'display': true
        })
    }

    render() {
        return <React.Fragment>
            <div>
                <label>First Name: </label>
                <input type="text"
                    placeholder="first name"
                    name="fname" value={this.state.fname} onChange={this.updateForm} />
                <p><label>Last Name: </label>
                    <input type="text" placeholder="last name"
                        name="lname" value={this.state.lname}
                        onChange={this.updateForm} />
                </p>
            </div>
            <div>
                <label>Favourite Color: </label>
                <p><input type="radio" name="color" value="red"
                    checked={this.state.color === 'red'} onChange={this.updateForm} />Red
                <input type="radio" name="color" value="blue"
                        checked={this.state.color === 'blue'} onChange={this.updateForm} />Blue
                <input type="radio" name="color" value="green"
                        checked={this.state.color === 'green'} onChange={this.updateForm} />Green
                </p>
            </div>
            <div>
                <label>Travel Destination: </label>
                <select value={this.state.country} name="country" onChange={this.updateForm}>
                    <option value="america">America</option>
                    <option value="new-zealand">New Zealand</option>
                    <option value="europe">Europe</option>
                </select>
            </div>
            <div>
                <button onClick={this.alertForm}>Alert</button>
                <button onClick={this.submitForm}>Submit</button>
                <div style={{ display: this.state.display === true ? 'block' : 'none' }}>
                    <p>Your first name: {this.state.fname}</p>
                    <p>Your last name: {this.state.lname}</p>
                    <p>Your favourite color: {this.state.color}</p>
                    <p>Your chosen country: {this.state.country}</p>
                </div>
                
            </div>

        </React.Fragment>
    }
}

export default SurveyForms;