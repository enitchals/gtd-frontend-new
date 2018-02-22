import React, {Component} from 'react';

export default function Project(props) {
    return (
        <div className="card SingleProject">
            <p className="CardTitle"> {props.project.project} </p>
            <p className="CardMemo"> {props.project.memo} </p>
        </div>
    )
};
