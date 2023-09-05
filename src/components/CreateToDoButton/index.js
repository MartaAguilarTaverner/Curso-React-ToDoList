import React from "react";

import './CreateToDoButton.css';

function CreateToDoButton({ setOpenModal }) {
  return(
      <button className="createButton" onClick={() => setOpenModal(state => !state)}>New Task</button>

  );
};

export { CreateToDoButton };