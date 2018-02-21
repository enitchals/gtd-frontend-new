import React, { Component } from 'react';
import axios from 'axios';

export default class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            memo: '',
        }
        this.memoHandler = this.memoHandler.bind(this);
        this.titleHandler = this.titleHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    memoHandler = (event) => {
        this.setState({memo: event.target.value});
    }
    titleHandler = (event) => {
        this.setState({title: event.target.value});
    }
    submitHandler = () => {
        const note = { user: this.props.appState.userID, title: this.state.title, note: this.state.memo, project: this.props.projectID }
        axios.post('https://getting-shit-done-backend.herokuapp.com/note', note)
            .then(res => {
                console.log(res);
                this.props.setAppState({notes: this.props.appState.notes.concat(res.data)})
            }).catch(err => {
                console.log(err);
            });
        this.setState({title: '', memo: ''})
    }

    render() {
        return (
            <div className="newNote">
                <input type="text" onChange={this.titleHandler} placeholder="title" value={this.state.title}/><br/>
                <textarea className="textarea" onChange={this.memoHandler} placeholder="note" value={this.state.memo}/><br/>
                <button onClick={this.submitHandler}>Save</button>
            </div>
        )
    }
}