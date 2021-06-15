import React from 'react';

export default class NumberBox extends React.Component {
    state = {
        count: this.props.initialValue
    };

    incrementBtn = () => {
        console.log("Button is clicked")
        this.setState({
            count: this.state.count + 2
        })
    }

    render() {
        return (
            <React.Fragment>
                <div style={{
                    border: "2px solid black",
                    width: "250px",
                    height: "250px",
                    backgroundColor: "yellow",
                    color: "blue"
                }}>
                    <p style={{
                        textAlign: "center",
                        fontSize: "32px"
                    }}>
                        {this.state.count}
                    </p>
                </div>
                <button onClick={this.incrementBtn}>Increment</button>
            </React.Fragment>
        )
    }
}