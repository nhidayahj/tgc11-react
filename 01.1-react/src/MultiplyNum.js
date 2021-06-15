import React from 'react';

function MultiplyNum(props) {
    let result = props.mul_one * props.mul_two;
    return (
        <div style={{
            backgroundColor: props.bg_color,
            fontSize: "18px",
            color: props.text_color,
            border: "1px solid aqua",
            marginTop: "10px"
        }}>
            <p>Multiplication of 2 numbers: {' '}
                {props.mul_one} x {props.mul_two} = {result}</p>
        </div>
    )

}

export default MultiplyNum;