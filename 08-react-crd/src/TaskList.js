import React from 'react'

export default class TaskList extends React.Component {
    state = {
        tasks: [
            {
                id: 12345,
                description: 'Feed the cat',
                done: false
            },
            {
                id: 54321,
                description: 'Wash the car',
                done: false,
            },
            {
                id: 3,
                description: 'Pay the bills',
                done: false
            }
        ],
        showAddForm: false,
        newTaskDesc: "",
        showEditForm: false,
        editedTaskTitle: ''
    }

    // displays all the task list
    renderTaskList() {
        let allTask = [];
        for (let task of this.state.tasks) {
            let e = (
                <div key={task.id}>
                    <li>
                        {task.description}
                        <input type="checkbox"
                            value={task.description}
                            checked={task.done}
                            onChange={()=>this.checkTask(task)} />
                        <button value={task.id} onClick={() => this.displayEditForm(task.id)}>Edit</button>
                        <button value={task.id} onClick={() => this.deleteTask(task)}>Delete</button>
                    </li>
                </div>
            )
            allTask.push(e)
        }
        return allTask;
    }

    // button to dislay add form
    displayAddForm = () => {
        this.setState({
            showEditForm: false,
            'showAddForm': true
        })
    }

    // add a task form
    addNewTask = (e) => {
        this.setState({
            'newTaskDesc': e.target.value
        })
    }

    addTaskToList = () => {
        let newTaskList = [...this.state.tasks];
        let newId = Math.floor(Math.random() * 9999 + 10000)
        let taskItem = ({
            'id': newId,
            'description': this.state.newTaskDesc,
            'done': false
        })
        // push the new task item to the clone task list

        newTaskList.push(taskItem);

        this.setState({
            tasks: newTaskList
        })

    }

    // edit form button
    displayEditForm = (id) => {
        for (let item of this.state.tasks) {
            if (item.id === id) {
                this.setState({
                    'editedTaskTitle': item.description,
                    // create an if variable to able to reference later 
                    'selectedId': id
                })
            }
        }
        // below sets the display flags
        this.setState({
            'showAddForm': false,
            'showEditForm': true
        })
    }

    // edit from the form field
    newEditedTitle = (e) => {
        this.setState({
            'editedTaskTitle': e.target.value
        })
    }

    // edit button from form field
    addNewEditedTask = () => {
        // create new edited task object 
        // to be edited into the cloned array 
        let newTask = {
            description: this.state.editedTaskTitle,
            id: this.state.selectedId,
            done: false
        }

        let clonedAllTask = [...this.state.tasks]
        let index;

        for (let item = 0; item < this.state.tasks.length; item++) {
            let currentTask = this.state.tasks[item];
            if (this.state.selectedId === currentTask.id) {
                // set the found id
                index = item;
                break
            }
        }
        // set the 
        clonedAllTask[index] = newTask
        this.setState({
            tasks:clonedAllTask
        })
    }


    // create interactivity to the checkboxes
    // allowing users to mark as done or not 
    checkTask = (task) => {
        
        // 1. clone the array & change the value of the 'done' property
        let clonedTask = {...task, done: !task.done};
        
        // 2. use MAP function to create new cloned array 
        let clonedArray = this.state.tasks.map((eachTask) => {
            if (eachTask.id !== clonedTask.id) {
                console.log("Non-Selected task: ",eachTask)
                return eachTask;
            } else {
                console.log("Selected task: ", eachTask)
                return clonedTask;
            }
        })
        console.log("Final cloned array: ",clonedArray)
        this.setState({
            tasks:clonedArray
        })

       
    }



    // Delete a task
    deleteTask = task => {
        // find the index to which the 'Delete' button is selected 
        // by identifying its id
        let index = this.state.tasks.findIndex( (t) => t.id === task.id)
        // cloned the array using the slice method
        let clonedArr = [
            ...this.state.tasks.slice(0,index),
            ...this.state.tasks.slice(index+1)
        ];

        // 4. set the cloned array back into state 
        this.setState({
            tasks:clonedArr
        })
    }



    render() {
        return <React.Fragment>
            <div>
                <h2>Task List</h2>
                <ul>
                    {this.renderTaskList()}
                </ul>
            </div>
            {/* Display either 'add/edit' buttons */}
            <div>
                <button onClick={this.displayAddForm}>Add New Task</button>

            </div>
            {/* display 'add' form */}
            <div style={{ display: this.state.showAddForm === true ? 'block' : 'none' }}>
                <h3>Add new task</h3>
                <label>New task: </label>
                <input type="text" value={this.state.newTaskDesc}
                    onChange={this.addNewTask} />
                <button onClick={this.addTaskToList}>Add Task</button>
            </div>
            {/* Display 'edit' form */}
            <div style={{ display: this.state.showEditForm === true ? 'block' : 'none' }}>
                <h3>Edit Task</h3>
                <label>Edit Task: </label>
                <input type="text" value={this.state.editedTaskTitle} name="editTaskTitle"
                    onChange={this.newEditedTitle} />
                <button onClick={this.addNewEditedTask}>Edit task</button>
            </div>

        </React.Fragment>
    }
}