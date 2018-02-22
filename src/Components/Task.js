import React, {Component} from 'react';

export default function Task(props) {
    return (
        <div className="card SingleTask" key={props.task._id}>
            <div className="row">
                <button className="TaskComplete" onClick={() => props.deleteHandler(props.task._id)}>&#x2714;</button>
                <div className="CardTitle"> {props.task.task} </div>
            </div>
            <p className="CardMemo"> {props.task.memo} </p>
        </div>
    )
};