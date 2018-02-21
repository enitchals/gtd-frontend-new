import React, {Component} from 'react';
import axios from 'axios';
import NewTask from './NewTask'

export default class Tasks extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.deleteHandler = this.deleteHandler.bind(this);
    }

    deleteHandler(key) {
        console.log(key);
        axios.delete(`https://getting-shit-done-backend.herokuapp.com/task/${key}`)
            .then(res => {
                console.log(res);
                this.props.setAppState({tasks: this.props.appState.tasks.filter(task => task._id !== res.data)})
            }).catch(err => {
                console.log(err);
            });
    }

    render() {
    const tasks = this.props.appState.tasks.map(task =>
        <li key={task._id}>
            <input type="checkbox" onChange={this.deleteHandler(task._id)}/>
            <p className="Task"> {task.task} </p>
            <p className="Memo"> {task.memo} </p>
        </li>
        );
    return (
        <div>
            <h1>To Do:</h1>
            <ul>{tasks}</ul>
            <NewTask appState={this.props.appState} setAppState={this.props.setAppState}/>
        </div>
        )
    }
}