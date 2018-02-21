import React, {Component} from 'react';
import NewNote from './NewNote';

export default class Notes extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        const notes = this.props.notes.map(note =>
            <div>
                <p className="NoteTitle">{note.title}</p>
                <p className="NoteText">{note.note}</p>
            </div>
        )
        return (
        <div>
            <h1>Notes:</h1>
            <ul>{notes}</ul>
            <NewNote appState={this.props.appState} setAppState={this.props.setAppState}/>
        </div>
        )
    }
}