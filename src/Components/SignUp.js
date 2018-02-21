import React, { Component } from 'react';
import axios from 'axios';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
        };
        this.signUp = this.signUp.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
    }

    emailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    nameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    passwordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    signUp = () => {
        axios.post('https://getting-shit-done-backend.herokuapp.com/user', {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password
        }).then(res => {
            console.log(res);
            if (res.data.code === 11000) {
                console.log("email already in use");
            }
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="SignUp">
                <input type = "text" onChange = {this.emailHandler} placeholder="email" value = {this.state.email}/><br/>
                <input type = "text" onChange = {this.nameHandler} placeholder="name" value = {this.state.name} /><br/>
                <input type = "text" onChange = {this.passwordHandler} placeholder="password" value = {this.state.password} /><br/>
                <button onClick = {this.signUp}>Sign Up</button>
            </div>
        )
    }
}