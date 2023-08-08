import React from "react";

import './ToDoSearcher.css';

function ToDoSearcher() {
  return (
    <input placeholder="cutting onion"
      className="ToDoSearcher"
      onChange={(event) => {
        console.log(event.target.value);
      }}
    />
  );
};

export { ToDoSearcher };