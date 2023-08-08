import React from "react";

import './CreateToDoButton.css';

function CreateToDoButton() {
  return(
      <button className="createButton" onClick={() => console.log('click')}>New Task</button>

  );
};

export { CreateToDoButton };