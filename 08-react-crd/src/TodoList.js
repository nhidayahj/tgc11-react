import React from 'react'

export default class TodoList extends React.Component {
    state = {
        tasks: [
            {
                'id': 1234,
                'title': 'Clean the house',
                'done': false
            }
        ],
        'newTaskTitle':""
    }
    renderTaskList = () => {
        let t = [];
        for (let i of this.state.tasks) {
            t.push(<div>{i.title}
            {/* <input type="checkbox" checked={i.done} onChange={() => {
                this.updateCheckbox(t)
            }}/> */}
            <button onClick={() => {this.deleteTask(t)}}>Delete</button>
            </div>)
        }
        return t;
    }

    // deleteTask = (t) => {
    //     let cloned = [...this.state.task]
    // }

    render() {
        return <React.Fragment>
            <h2>Add new task</h2>
            <div>
                <label>Title </label>
                <input type="text" name='title' value={this.state.title} onChange={this.updateTask}/>
            </div>
            <button onClick={this.addTask}>Add task</button>

            <h2>Task List</h2>
            {this.renderTaskList()}

        </React.Fragment>
    }

    addTask = (e) => {
        // create a new task 
        let newTask = {
            'id': Math.floor(Math.random() * 99999 + 100000),
            'title':this.state.newTaskTitle,
            'done':false
        }
    }

    updateTask = (e) => {
        this.setState({
            'newTaskTitle':e.target.value
        })
    }

}