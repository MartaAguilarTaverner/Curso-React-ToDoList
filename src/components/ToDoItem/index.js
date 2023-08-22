import React from "react";

import { DeleteIcon } from "../DeleteIcon";
import { CompleteIcon } from "../CompleteIcon";

import './ToDoItem.css';

function ToDoItem ({text, completed, onComplete, onDelete}) {
  return (
    <li className="ToDoItem">
      <CompleteIcon
      className='Complete-icon'
        done={completed}
        onClick={onComplete}
      />
      <p className={completed ? 'ToDoItem-p--complete' : ''}>
        {text}
      </p>
      <DeleteIcon
        className='Delete-icon'
        onClick={onDelete}
      />
    </li>
  );
}

export { ToDoItem };