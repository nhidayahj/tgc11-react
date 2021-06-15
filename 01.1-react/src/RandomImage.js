import React from 'react';

export default class RandomImage extends React.Component {
    state = {
        currentImage:0,
        imageList: [
            require('./candle.jpg').default,
            require('./reed.jpg').default,
            require('./candle-burner.jpg').default,
            
        ]
    }

    changeImage = () => {
        let newIndex = Math.floor(Math.random() * 3);
        this.setState({
            currentImage:newIndex
        })
    }

    render() {
        return (
            <React.Fragment>
                <img src={this.state.imageList[this.state.currentImage]}/>
                <button onClick={this.changeImage}>Change Image</button>
            </React.Fragment>
        )
    }
}