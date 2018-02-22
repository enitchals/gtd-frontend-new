import React, { Component } from 'react';
import axios from 'axios';

export default class NewTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            memo: '',
        }
        this.taskHandler = this.taskHandler.bind(this);
        this.memoHandler = this.memoHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    taskHandler = (event) => {
        this.setState({task: event.target.value});
    }

    memoHandler = (event) => {
        this.setState({memo: event.target.value});
    }

    submitHandler = () => {
        const task = { user: this.props.appState.userID, task: this.state.task, memo: this.state.memo, project: this.props.projectID }
        axios.post('https://getting-shit-done-backend.herokuapp.com/task', task)
            .then(res => {
                console.log(res);
                this.props.setAppState({tasks: this.props.appState.tasks.concat(res.data)})
            }).catch(err => {
                console.log(err);
            });
        this.setState({task: '', memo: ''})
    }

    render() {
        return (
            <div className="newTask">
                <input className="input" type="text" onChange={this.taskHandler} placeholder="task" value={this.state.task}/><br/>
                <textarea className="textarea" onChange={this.memoHandler} placeholder="note" value={this.state.memo}/><br/>
                <button className="submit"  onClick={this.submitHandler}>Save</button>
            </div>
        )
    }
}