import React from 'react'

export default class ATM extends React.Component {
    state = {
        balance: 1000,
        amount: 0
    }

    deposit = () => {
        this.setState({
            'balance':parseFloat(this.state.balance) + parseFloat(this.state.amount)
        })
    }

    withdraw = () => {
        this.setState({
            'balance':parseFloat(this.state.balance) - parseFloat(this.state.amount)
        })
    }

    updateFormField = (e) => {
        this.setState({
            'amount': e.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>{this.state.balance}</div>
                <input type="text" name="amount" value={this.state.amount} onChange={this.updateFormField}/>
                <button onClick={this.deposit}>Deposit</button>
                <button onClick={this.withdraw}>Withdraw</button>
            </React.Fragment>

        )
    }
}