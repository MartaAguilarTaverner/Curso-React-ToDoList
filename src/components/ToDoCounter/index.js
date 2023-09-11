import React, { useContext } from "react";

import { ToDoContext } from "../../Context";

import "./ToDoCounter.scss";

function ToDoCounter () {
  const {
    completedToDos,
    totalToDos,
  } = useContext(ToDoContext);

  return <div className="completed-tasks">
    {totalToDos === completedToDos
      ? <h1 className="completed-all-tasks-h1-text">
          You don't have any tasks!!
        </h1>
      : <h1 className="completed-tasks-h1-text">
          Completed <span className="number-finished">{completedToDos}</span> of <span className="number-total">{totalToDos}</span> tasks.
        </h1>
    }
  </div>
};

export { ToDoCounter };