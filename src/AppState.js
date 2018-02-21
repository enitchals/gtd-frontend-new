import React, { Component } from 'react';

export default class AppState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: '',
            tasks: [],
            notes: [],
            events: [],
            projects: []
        }
        this.setAppState = this.setAppState.bind(this);
    }

    setAppState(newState, callback) {
        this.setState(newState, callback);
        console.log("state changed: ", this.state);
    }

render() {
    return (
        <div className="AppState">
            {React.Children.map(this.props.children, child => {
                return React.cloneElement(child, {
                    appState: this.state,
                    setAppState: this.setAppState
                });
            })}
        </div>
    );
}
}