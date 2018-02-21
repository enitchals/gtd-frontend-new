import React, { Component } from 'react';
import axios from 'axios';

export default class NewEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: '',
            memo: '',
            date: '',
            time: '',
        }
        this.eventHandler = this.eventHandler.bind(this);
        this.memoHandler = this.memoHandler.bind(this);
        this.dateHandler = this.dateHandler.bind(this);
        this.timeHandler = this.timeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    eventHandler = (event) => {
        this.setState({event: event.target.value});
    }
    memoHandler = (event) => {
        this.setState({memo: event.target.value});
    }
    timeHandler = (event) => {
        this.setState({time: event.target.value});
    }
    dateHandler = (event) => {
        this.setState({date: event.target.value});
    }
    submitHandler = () => {
        const event = { user: this.props.appState.userID, event: this.state.event, memo: this.state.memo, project: this.props.projectID, date: this.state.date, time: this.state.time }
        axios.post('https://getting-shit-done-backend.herokuapp.com/event', event)
            .then(res => {
                console.log(res);
                this.props.setAppState({events: this.props.appState.events.concat(res.data)})
            }).catch(err => {
                console.log(err);
            });
        this.setState({event: '', memo: '', date: '', time: ''})
    }

    render() {
        return (
            <div className="newEvent">
                <input type="text" onChange={this.eventHandler} placeholder="event" value={this.state.event}/><br/>
                <textarea className="textarea" onChange={this.memoHandler} placeholder="note" value={this.state.memo}/><br/>
                <input type="date" onChange={this.dateHandler} value={this.state.date}/><br/>
                <input type="time" onChange={this.timeHandler} value={this.state.time}/><br/>
                <button onClick={this.submitHandler}>Save</button>
            </div>
        )
    }
}