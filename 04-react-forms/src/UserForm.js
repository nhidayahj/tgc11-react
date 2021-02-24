import React from 'react'

export default class UserForm extends React.Component {
    state={
        'username':'',
        'cuisine':'',
        'destination':''
    }

    // below allows a single onChange funtion to update multiple fields 
    updateUserForm = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>Username: </label>
                    <input type="text" 
                    name="username"
                    value={this.state.username}
                    onChange={this.updateUserForm}/>
                </div>
                {/* Radio Buttons Selection */}
                <div>
                    <label>Favourite Cuisine: </label>
                    <input type="radio" 
                    name="cuisine"
                    value="korean"
                    onChange={this.updateUserForm}
                    checked={this.state.cuisine==="korean"}/> Korean 
                    {/* Radio 2  */}
                    <input type="radio" 
                    name="cuisine"
                    value="japanese"
                    onChange={this.updateUserForm}
                    checked={this.state.cuisine==="japanese"}/> Japanese 
                    {/* Radio 3 */}
                    <input type="radio" 
                    name="cuisine"
                    value="western"
                    onChange={this.updateUserForm}
                    checked={this.state.cuisine==="western"}/> Western 
                </div>
                {/* Single dropdown */}
                <div>
                    <label>Travel Destination: </label>
                    <select value={this.state.destination} 
                    name="destination"
                    onChange={this.updateUserForm}>
                        <option value="australia">Australia</option>
                        <option value="new zealand">New Zealand</option>
                        <option value="canada">Canada</option>
                        <option value="brazil">Brazil</option>
                    </select>
                </div>
                <button>Submit</button>

            </React.Fragment>
        )
    }
}