import React from 'react';

const Task = (props) => {
    return (
        <div>
            <div className="task">
                <div>
                    <span>Из {props.name}</span>

                    <span> В {props.name}</span>

                    <span> Время {props.name}</span>

                    <span> Автобус {props.name}</span>

                </div>
            </div>
        </div>

    );
};
Task.defaultProps = {name: "", description: ""};
export default Task;