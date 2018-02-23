import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';

export default function GuestView(props) {
    return (
        <div className="GuestView">
            <Login appState={props.appState} setAppState={props.setAppState}/>
            <SignUp/>
        </div>
    )
};