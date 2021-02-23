import React from 'react'
import axios from 'axios'

export default class TodoList extends React.Component{
    state = {
        tasks:[]
    }

    renderList = () => {
        let todos = [];
        for(let if of )
    }

    render(){
        return <React.Fragment>
            <button onClick={this.loadData}>Load Data</button>
        </React.Fragment>
    }
    
    loadData = async() => {
        let response = axios.get('tasks.json')

    }


}