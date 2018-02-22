import React, {Component} from 'react';
import AnEvent from './Event';
import NewEvent from './NewEvent';

export default class Events extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
    const events = this.props.events.map(anEvent =>
        <AnEvent anEvent={anEvent} key={anEvent._id}/>
    );
    return (
        <div>
            <div className="Section-Header">Events:</div>
            {events}
            <NewEvent appState={this.props.appState} setAppState={this.props.setAppState}/>
        </div>
        )
    }
}