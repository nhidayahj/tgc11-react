import React from 'react'


export default class McqQuestions extends React.Component {
    state = {
        qns1answer:""
    }

    updateAnswer = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        return (
            <section id="qns1">
                <h1>Question 1: Which island is Mount Faber, Singapore, located on?</h1>
                <ul>
                    <li>
                        <input name="qns1answer" type="radio" value="A"
                        onChange={this.updateAnswer}
                        checked={this.state.qns1answer=="A"} /><label>A. Palau Ubin</label>
                    </li>
                    <li>
                        <input name="qns1answer" type="radio" value="B" 
                        onChange={this.updateAnswer}
                        checked={this.state.qns1answer=="B"}/><label>B. Palau Ujong</label>
                    </li>
                    <li>
                        <input name="qns1answer" type="radio" value="C" 
                        onChange={this.updateAnswer} 
                        checked={this.state.qns1answer=="C"}/><label>C. Palau Tekong</label>
                    </li>
                    <li>
                        <input name="qns1answer" type="radio" value="D" 
                        onChange={this.updateAnswer}
                        checked={this.state.qns1answer=="D"}/><label>D. Saint John Island</label>
                    </li>
                </ul>
            </section>
        )
    }
}