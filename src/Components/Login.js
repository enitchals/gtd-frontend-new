import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.login = this.login.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
        this.dataHandler = this.dataHandler.bind(this);
    }

    emailHandler = (event) => {
        this.setState({email: event.target.value});
    }
    
    passwordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    dataHandler = (data) => {
        this.props.setAppState({
            userID: data.user._id,
            tasks: data.tasks,
            notes: data.notes,
            events: data.events,
            projects: data.projects
        });
    }

    login() {
        axios.post('https://getting-shit-done-backend.herokuapp.com/login', {
            email: this.state.email,
            password: this.state.password,
        }).then((res) => {
            this.dataHandler(res.data);
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="card">
                <div className="CardTitle Center">Login:</div>
                <input className="input" type="text" onChange={this.emailHandler} placeholder="email" value={this.state.email}/><br/>
                <input className="input" type="text" onChange={this.passwordHandler} placeholder="password" value={this.state.password}/><br/>
                <button className="submit" onClick={this.login}>Login</button>
            </div>
        )
    }
}