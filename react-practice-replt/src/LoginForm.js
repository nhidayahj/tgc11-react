import React from 'react'

export default class LoginForm extends React.Component {
    state = {
        username: '',
        password: '',
        status: null
    }

    checkValidity() {
        if (this.state.username === "rotiprataguy" && this.state.password === "rotiprata123") {
           return true
        } else  {
           return false
        }
    }

    displayAlert() {
        if (this.state.status === "true") {
            return <React.Fragment>
                <p>Login Successful!</p>
            </React.Fragment>
        } else {
            return <React.Fragment>
                <p>Invalid username/password.</p>
            </React.Fragment>
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>Username: </label>
                    <input type="text"
                        value={this.state.username}
                        onChange={this.showUsername} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text"
                        value={this.state.password}
                        onChange={this.showPassword} />
                </div>
                <div>
                    <button onClick={this.validateLogin} value={this.checkValidity()}>Submit</button>
                </div>
                <div>
                   {this.displayAlert()}
                </div>

            </React.Fragment>
        )
    }

    showUsername = (e) => {
        this.setState({
            'username':e.target.value
        })
    }

    showPassword = (e) => {
        this.setState({
            'password':e.target.value
        })
    }

    validateLogin =(e) => {
        this.setState({
            'status':e.target.value
        })
    }



}