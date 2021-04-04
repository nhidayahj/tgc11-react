import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

export default function ContactUs() {
    // replicate state using React hooks by using {useState}
  // first argument is the default value of the state variable
    const [formData, setFormData] = useState({
        'email': '',
        'comments': ''
    })

    // create a History function by using useHistory
    // this can then pass information to another component 
    // in this case, the ThankYou component
    const history = useHistory()

    const submitForm = () => {
        history.push('/thank-you', {
            'formData': formData
        })
    }

    const updateFormField = (e) => {
        // 1. clone the original object
        let clone = { ...formData }

        // 2. make changes to the clone
        clone[e.target.name] = e.target.value;

        // 3. save back to state
        setFormData(clone);
    }

    return (
        <React.Fragment>
            <h1>Contact Us</h1>
            <div>
                <label className="form-label">Email</label>
                <input type="text" name="email" value={formData.email} onChange={updateFormField} className="form-control" />
            </div>
            <div>
                <label className="form-label">Comments</label>
                <textarea name="comments" value={formData.comments} onChange={updateFormField} className="form-control" />
            </div>
            <div>
                <button className="btn btn-primary btn-sm mt-4" onClick={submitForm} >Send</button>
            </div>

        </React.Fragment>

    )
}