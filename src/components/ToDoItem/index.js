import React from "react";

import './ToDoItem.css';

function ToDoItem (props) {
  return (
    <li className="ToDoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
        V
      </span>
      <p className={`ToDoItem-p ${props.completed && 'ToDoItem-p--complete'}`}>
        {props.text}
      </p>
      <spam className='Icon Icon-delete'>
        X
      </spam>
    </li>
  );
}

export { ToDoItem };