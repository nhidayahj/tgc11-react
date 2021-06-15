import React from 'react';

export default class NumberBox extends React.Component{
    state={
        count: this.props.initialValue
    };
    render() {
        return (
            <React.Fragment>
                <div style={{
                    border:"2px solid black",
                    width:"250px",
                    height:"250px",
                    backgroundColor:"yellow",
                    color:"blue"
                }}>
                    <p style={{textAlign:"center",
                    fontSize:"32px"}}>
                        {this.state.count}
                    </p>
                </div>
            </React.Fragment>
        )
    }
}