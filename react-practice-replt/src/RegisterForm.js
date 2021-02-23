import React from 'react'

export default class RegisterForm extends React.Component {
    state = {
        username: "",
        email: "",
        password: ""
    }


    checkUsername() {
        if (this.state.username > 4 && this.state.username <= 10) {
            return this.state.username
        } else {
            return false
        }
    }


    render() {
        return (
            <React.Fragment>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.getUsername} />
                    <span className="error"></span>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" />
                    <span className="error"></span>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" name="password" />
                    <span className="error"></span>
                </div>
            </React.Fragment>
        )
    }

    getUsername = (e) => {
        this.setState({
            'username':e.target.value
        })
    }

    checkUsername = (e) => {
        this.setState({
            'username': e.target.value
        })
    }

}