import React from 'react'


export default class RegisterForm extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
        error: ""
    }

    checkValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    checkUsername() {
        if (this.state.username.length > 3 && this.state.username.length < 10) {

            return 'none'
        } else {

            return 'block'
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <h4>Username must be 4 to 10 characters long</h4>
                    <label>Username: </label>
                    <input type="text" name="username" value={this.state.username}
                        onChange={this.checkValue} />
                    <span className="error" style={{ display: this.checkUsername(), color:"red"}}>Error</span>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" name="email" value={this.state.email}
                        onChange={this.checkValue} />
                    <span className="error"></span>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" name="password" value={this.state.password}
                        onChange={this.checkValue} />
                    <div>
                        <span className="error" style={{ color: "red" }}>Password must have at least {`!, @, #, $, %, ^, & or *`}</span>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}