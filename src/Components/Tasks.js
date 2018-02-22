import React, {Component} from 'react';
import axios from 'axios';
import Task from './Task';
import NewTask from './NewTask';

export default class Tasks extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.deleteHandler = this.deleteHandler.bind(this);
    }

    deleteHandler(key) {
        console.log("DELETING: ", key);
        axios.delete(`https://getting-shit-done-backend.herokuapp.com/task/${key}`)
            .then(res => {
                console.log("DELETED: ", res);
                this.props.setAppState({tasks: this.props.appState.tasks.filter(task => task._id !== res.data)})
            }).catch(err => {
                console.log(err);
            });
    }

    render() {
    const tasks = this.props.appState.tasks.map(task =>
        <Task task={task} deleteHandler={this.deleteHandler}/>
    );
    return (
        <div>
            <div className="Section-Header">To Do:</div>
            {tasks}
            <NewTask appState={this.props.appState} setAppState={this.props.setAppState}/>
        </div>
        )
    }
}