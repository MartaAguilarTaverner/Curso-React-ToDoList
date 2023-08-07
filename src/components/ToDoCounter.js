import React from "react";

function ToDoCounter ({ total, completed }) {
  return (
    <h1>
      Completed {completed} of {total} tasks.
    </h1>
  );
};

export { ToDoCounter };