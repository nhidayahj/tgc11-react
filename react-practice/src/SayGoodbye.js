import React from 'react'


// Function-based component
export default function SayGoodbye(props) {
    return (
        <div>
            <h2 style=
            {{backgroundColor:props.bgColor,
            color:props.fontColor}}>
                Goodbye {props.person}</h2>
        </div>
    )
}