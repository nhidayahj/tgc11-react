import React from 'react'

class SurveyForms extends React.Component {
    state = {
        'fname': "",
        'lname': "",
        'color': '',
        'country': '',
        'fruits': "",
        'display': false
    }

    updateForm = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    updateCheckList = (e) => {
        // current value is the fruits array defined in state variable 
        // surrounded in [] indicates its an array 
        let currentValues = this.state[e.target.name];
        
        let modifiedValues;

        // check if value exists in the array
        // statement below means value does NOT exists in fruits array
        if(!currentValues.includes(e.target.value)) {
            // one method to make copy of the original and add in the new checked item
            // below uses the 'spread' operator
            modifiedValues = [...currentValues, e.target.value]
            
        } else {
            // else means the value is checked or 'true', and user is unchecking the checkbox 
            modifiedValues = currentValues.filter((element)=>{
                return element !== e.target.value
            })
            console.log(modifiedValues)
        }

        this.setState({
            [e.target.name]: modifiedValues
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
                <p>
                <label>Fruits: </label>
                </p>
                <p>
                    {/* in checkboxes, the checked property returns 'true' or 'false' */}
                    <input type="checkbox" name="fruits" value="apple" 
                    checked={this.state.fruits.includes('apple')}
                    onChange={this.updateCheckList}/> Apple
                <input type="checkbox" name="fruits" value="banana" 
                checked={this.state.fruits.includes('banana')} onChange={this.updateCheckList}/> Banana
                <input type="checkbox" name="fruits" value="cherry" 
                checked={this.state.fruits.includes('cherry')} onChange={this.updateCheckList}/> Cherry
                <input type="checkbox" name="fruits" value="durian"
                checked={this.state.fruits.includes('durian')} onChange={this.updateCheckList}/> Durian
                <input type="checkbox" name="fruits" value="grapefruit" 
                checked={this.state.fruits.includes('grapefruit')} onChange={this.updateCheckList}/> Grapefruit
                </p>
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