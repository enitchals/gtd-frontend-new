import React, {Component} from 'react';
import NewEvent from './NewEvent';

const AnEvent = (props) => {
    return (
        <div>
            <p className="Event"> {props.anEvent.event} </p>
            <p className="Memo"> {props.anEvent.memo} </p>
            <p className="Date"> {props.anEvent.date} </p>
            <p className="Time"> {props.anEvent.time} </p>
            </div>
    )
};

export default class Events extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
    const events = this.props.events.map(anEvent => <AnEvent anEvent={anEvent} key={anEvent._id}/>);
    return (
        <div>
            <h1>Events:</h1>
            <ul>{events}</ul>
            <NewEvent appState={this.props.appState} setAppState={this.props.setAppState}/>
        </div>
        )
    }
}