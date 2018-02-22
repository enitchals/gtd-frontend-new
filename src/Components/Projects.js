import React, {Component} from 'react';
import Project from './Project';
import NewProject from './NewProject';
import {Link} from 'react-router-dom';

export default class Projects extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
    const projects = this.props.projects.map(project =>
        <Project project={project} key={project._id}/>
    );
    return (
        <div>
            <div className="Section-Header">Project List:</div>
            {projects}
            <NewProject appState={this.props.appState} setAppState={this.props.setAppState}/>
        </div>
        )
    }
}