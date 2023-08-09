import React from "react";
import "./ToDoCounter.css";

function ToDoCounter ({ total, completed }) {
  return (

    total === completed ?

      <div className="completedAllTasks">
        <h1>
          Congratulations, you finished all the tasks!!
        </h1>
      </div>

    :

      <div className="completedTasks">
        <h1>
          Completed <span>{completed}</span> of <span>{total}</span> tasks.
        </h1>
      </div>
  );
};

export { ToDoCounter };