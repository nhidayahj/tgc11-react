import React from 'react'

export default class ImageSwitcher extends React.Component {
    state = {
        images: [
            require('./halal.png').default,
            require('./pin.png').default
        ],
        current: 0
    }

    clickToChange = () => {
        let nextImage = Math.floor(Math.random() * 2)
        // to update the state or change the variable in the state
        this.setState({
            'current':parseInt(nextImage)
        })
    }
    render() {
        return <React.Fragment>

            <img src={this.state.images[this.state.current]}/>
            <button onClick={this.clickToChange}>Change Me</button>
        </React.Fragment>

    }
}