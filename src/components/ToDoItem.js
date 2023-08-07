import React from "react";

function ToDoItem (props) {
  return (
    <li>
      <span>V</span>
      <p>{props.text}</p>
      <spam>X</spam>
    </li>
  );
}

export { ToDoItem };