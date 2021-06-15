import React from 'react'

export default function AlertBox(props) {
    return (
        <div style={{
            backgroundColor: "aqua",
            color: props.text_color,
            fontSize: "32px",
            border: "2px solid red"
        }}>
            <p>This is an Alert Component with message: {props.alert_msg}</p>
        </div>
    )
}