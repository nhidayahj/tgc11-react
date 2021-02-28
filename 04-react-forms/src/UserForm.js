import React from 'react'

export default class UserForm extends React.Component {
    state = {
        'username': '',
        'cuisine': '',
        'destination': '',
        'contact': [],
        'display': false
    }

    // below allows a single onChange funtion to update multiple fields 
    updateUserForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // update contact process checkbox
    updateContact = (e) => {
        let currentList = this.state[e.target.name];
        let modifiedContactList;

        if (!currentList.includes(e.target.value)) {
            modifiedContactList = [...currentList, e.target.value]
        } else {
            modifiedContactList = currentList.filter((item) => {
                return item !== e.target.value
            })
        }

        this.setState({
            'contact': modifiedContactList
        })
    }

    displayForm() {
        return (
            <React.Fragment><p>Your username: {this.state.username}</p>
                <p>Your favourite cuisine: {this.state.cuisine}</p>
                <p>Your favourite destination: {this.state.destination}</p>
                <p>Contact by: {this.state.contact.join(', ')}</p>
            </React.Fragment>
        )
    }

    submitForm = () => {
        this.setState({
            // display variable is the state flag
            'display': true
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
                        onChange={this.updateUserForm} />
                </div>
                {/* Radio Buttons Selection */}
                <div>
                    <label>Favourite Cuisine: </label>
                    <input type="radio"
                        name="cuisine"
                        value="korean"
                        onChange={this.updateUserForm}
                        checked={this.state.cuisine === "korean"} /> Korean
                    {/* Radio 2  */}
                    <input type="radio"
                        name="cuisine"
                        value="japanese"
                        onChange={this.updateUserForm}
                        checked={this.state.cuisine === "japanese"} /> Japanese
                    {/* Radio 3 */}
                    <input type="radio"
                        name="cuisine"
                        value="western"
                        onChange={this.updateUserForm}
                        checked={this.state.cuisine === "western"} /> Western
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
                {/* Include mail checkboxes */}
                <div>
                    <label>Select contact type: </label>
                    <p>
                        <input type="checkbox" name="contact" value="mail"
                            checked={this.state.contact.includes('mail')}
                            onChange={this.updateContact} />Mail
                        <input type="checkbox" name="contact" value="phone"
                            checked={this.state.contact.includes('phone')}
                            onChange={this.updateContact} />Phone
                        <input type="checkbox" name="contact" value="email"
                            checked={this.state.contact.includes('email')}
                            onChange={this.updateContact} />Email
                    </p>
                </div>


                <button onClick={this.submitForm}>Submit</button>
                <div style={{ display: this.state.display === true ? 'block' : 'none' }}>
                    {this.displayForm()}
                </div>
            </React.Fragment>
        )
    }
}