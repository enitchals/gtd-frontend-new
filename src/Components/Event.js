import React, {Component} from 'react';

export default function AnEvent(props) {
    return (
        <div className="card SingleEvent">
            <p className="CardTitle"> {props.anEvent.event} </p>
            <p className="Timestamp"> {props.anEvent.date} at {props.anEvent.time} </p>
            <p className="CardMemo"> {props.anEvent.memo} </p>
        </div>
    )
};