import React from 'react'
 

export default class Todo extends React.Component{
    state = {
        tasks:[
            'Walk the dog'
        ]
    }
    render() {
        let t = [];
        for(let eachTask of this.state.tasks) {
        t.push(<li>{eachTask}</li>)
        }
        return(
            <React.Fragment>
                
            </React.Fragment>
        )
    }
}