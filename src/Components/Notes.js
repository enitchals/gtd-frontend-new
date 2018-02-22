import React, {Component} from 'react';
import Note from './Note';
import NewNote from './NewNote';

export default class Notes extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        const notes = this.props.notes.map(note =>
            <Note note={note} key={note._id}/>
        )
        return (
        <div>
            <div className="Section-Header">Notes:</div>
            {notes}
            <NewNote appState={this.props.appState} setAppState={this.props.setAppState}/>
        </div>
        )
    }
}