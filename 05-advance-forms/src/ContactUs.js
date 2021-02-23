import React from 'react'

export default class ContactUs extends React.Component {
    state = {
        'fname': "",
        'lname': "",
        'enquiry': "",
        'country': "",
        'showResult': false
    }

    render() {
        return (
            <React.Fragment>
                <h2>Contact Us</h2>
                <div>
                    <label className="form-label">First Name: </label>
                    <input className="form-control" type="text" name="fname" value={this.state.fname} onChange={this.getfName} />
                </div>
                <div>
                    <label className="form-label">Last Name: </label>
                    <input className="form-control" type="text" value={this.state.lname} onChange={e => { this.setState({ 'lname': e.target.value }) }} />
                </div>
                {/* Enquiry Radio Selection */}
                <div>
                    <label className="form-label">Type of Enquiry</label>
                    <div className="form-check">
                        <input className="form-check-input"
                            name="support"
                            type="radio"
                            value="Support"
                            onChange={this.typeOfEnquiry}
                            checked={this.state.enquiry=="Support"}
                            />
                        <label className="form-check-label">Support</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input"
                            name="sales"
                            type="radio"
                            value= "Sales"
                            onChange={this.typeOfEnquiry}
                            checked={this.state.enquiry=="Sales"}
                            
                        />
                        <label className="form-check-label">Sales</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input"
                            name="marketing"
                            type="radio"
                            value="Marketing"
                            onChange={this.typeOfEnquiry}
                            checked={this.state.enquiry=="Marketing"}
                            
                        />
                        <label className="form-check-label">Marketing</label>
                    </div>

                </div>
                {/* End of Radio Enquiry */}
                {/* Country Selection */}
                <div>
                    <label className="form-label">Country</label>
                    <select className="form-control"
                        name="country"
                        value={this.state.country}
                        onChange={this.selectCountry}>
                        <option>--Select a Country--</option>
                        <option>Singapore</option>
                        <option>Malaysia</option>
                        <option>Thailand</option>
                    </select>
                </div>

                <div style={{display: this.showResult() ? 'block' :'none' }}>
                    <p>You have entered: </p>
                    <p>{this.displayResult()}</p>
                </div>


            </React.Fragment>

        )
    }
    getfName = (e) => {
        this.setState({
            'fname': e.target.value
        })
    }
    typeOfEnquiry = (e) => {
        this.setState({
            'enquiry': e.target.value
        })
    }
    selectCountry = (e) => {
        this.setState({
            'country': e.target.value
        })
    }
    showResult = () => {
        if (this.state.fname && this.state.lname && this.state.enquiry && this.state.country) {
            return true
        } else {
            return false
        }
    }

    displayResult() {
        return (
            <React.Fragment>
                <h2>You have entered your particulars</h2>
                <ul>
                    <li>First Name: {this.state.fname}</li>
                    <li>Last Name: {this.state.lname}</li>
                    <li>Enquiry: {this.state.enquiry}</li>
                    <li>Country: {this.state.country}</li>
                </ul>
            </React.Fragment>

        )
    }

}