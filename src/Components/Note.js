import React, {Component} from 'react';

export default function Note(props) {
    return (
        <div className="card SingleNote">
            <p className="CardTitle">{props.note.title}</p>
            <p className="CardMemo">{props.note.note}</p>
        </div>
    )
};