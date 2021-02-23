import React from 'react'

class SurveyForms extends React.Component {
    state = {
        email:"",
        rating: 0,
        country: "",
        knowAbout: []
    }
    render() {
        return <React.Fragment>
            <div>
                <label></label>
            </div>

        </React.Fragment>
    }

    updateEmail = (e) => {
        this.setState({
            'email':e.target.value
        })
    }

    updateRating = () => {
        
    }
}   

export default SurveyForms;