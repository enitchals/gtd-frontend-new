import React, { Component } from 'react';
import Tasks from './Tasks';
import Notes from './Notes';
import Projects from './Projects';
import Events from './Events';
import Header from './Header';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App body">
                <div className="column EVENTS box">
                    <Events events={this.props.appState.events} appState={this.props.appState} setAppState={this.props.setAppState}/>
                </div>
                <div className="column TASKS box">
                    <Tasks tasks={this.props.appState.tasks} appState={this.props.appState} setAppState={this.props.setAppState}/>
                </div>
                <div className="column wide-column NOTES box">
                    <Notes notes={this.props.appState.notes} appState={this.props.appState} setAppState={this.props.setAppState}/>
                </div>
                <div className="column PROJECTS box">
                    <Projects projects={this.props.appState.projects} appState={this.props.appState} setAppState={this.props.setAppState}/>
                </div>
            </div>
        )
    }
}