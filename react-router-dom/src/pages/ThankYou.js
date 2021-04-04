import React from 'react'
import { useLocation } from 'react-router-dom'


export default function ThankYou() {

    const location = useLocation();
    // retrieving the state variable data
    const email = location.state.formData.email;
    const comments = location.state.formData.comments;

    return (
        <React.Fragment>
            <h3>Thank you for your submission</h3>
            <div>
                <ul>
                    <li>Email: {email}</li>
                    <li>comments: {comments}</li>
                </ul>

            </div>
        </React.Fragment>

    )
}