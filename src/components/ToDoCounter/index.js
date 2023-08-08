import React from "react";
import "./ToDoCounter.css";

function ToDoCounter ({ total, completed }) {
  return (
    <div className="completedTasks">
      <h1>
        Completed <span>{completed}</span> of <span>{total}</span> tasks.
      </h1>
    </div>
  );
};

export { ToDoCounter };