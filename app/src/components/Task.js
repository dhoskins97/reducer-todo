import React from 'react';

const Task = props => {
    return (
        <div className="taskContainer">
            <h4>{props.taskName}</h4>
            <button onClick={props.someFunction} >Complete!</button>
        </div>
    )
}

export default Task;