import React, { Component } from 'react';
import axios from 'axios';

export default class NewProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: '',
            memo: ''
        }
        this.projectHandler = this.projectHandler.bind(this);
        this.memoHandler = this.memoHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    projectHandler = (event) => {
        this.setState({project: event.target.value});
    }
    memoHandler = (event) => {
        this.setState({memo: event.target.value});
    }
    submitHandler = () => {
        const project = { user: this.props.appState.userID, project: this.state.project, memo: this.state.memo }
        const state = this.props.appState;
        axios.post('https://getting-shit-done-backend.herokuapp.com/project', project)
            .then(res => {
                console.log(res);
                this.props.setAppState({projects: state.projects.concat(res.data)})
            }).catch(err => {
                console.log(err);
            });
        this.setState({project: '', memo: ''})
    }

    render() {
        return (
            <div className="newProject">
                <input type="text" onChange={this.projectHandler} placeholder="project title" value={this.state.project}/><br/>
                <textarea className="textarea" onChange={this.memoHandler} placeholder="note" value={this.state.memo}/><br/>
                <button onClick={this.submitHandler}>Save</button>
            </div>
        )
    }
}