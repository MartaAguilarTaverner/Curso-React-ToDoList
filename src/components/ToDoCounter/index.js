import React, { useContext } from "react";
import "./ToDoCounter.css";
import { ToDoContext } from "../../Context";

function ToDoCounter () {
  const {
    completedToDos,
    totalToDos,
  } = useContext(ToDoContext)
  return (

    totalToDos === completedToDos ?

      <div className="completedAllTasks">
        <h1>
          Congratulations, you finished all the tasks!!
        </h1>
      </div>

    :

      <div className="completedTasks">
        <h1>
          Completed <span className="Number-finished">{completedToDos}</span> of <span className="Number-total">{totalToDos}</span> tasks.
        </h1>
      </div>
  );
};

export { ToDoCounter };