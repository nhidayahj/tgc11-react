import React from 'react'

export default function ColorControl(props) {
    return (
        <React.Fragment>
            <select name="0" value={props.boxes[0].value}>
                <option></option>
            </select>

        </React.Fragment>

    )
}