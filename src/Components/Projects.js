import React, {Component} from 'react';
import NewProject from './NewProject';
import {Link} from 'react-router-dom';

const Project = (props) => {
    return (
        <div>
            <p className="Project"> {props.project.project} </p>
            <p className="Memo"> {props.project.memo} </p>
        </div>
    )
};

export default class Projects extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);        
    }
    render() {
    const projects = this.props.projects.map(project => <Project project={project} key={project._id}/>);
    return (
        <div>
            <h1>Project List:</h1>
            <ul>{projects}</ul>
            <NewProject appState={this.props.appState} setAppState={this.props.setAppState}/>
        </div>
        )
    }
}