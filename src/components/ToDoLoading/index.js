import React from "react";
import './ToDoLoading.css';

function ToDoLoading() {
  return (
    <div className="ToDoLoading-container">
      <div className="Container-text">
        <p className="ToDoLoading-text">Loading...</p>
      </div>
      <div className="Container-Loader">
        <span className="Loader"></span>
      </div>
    </div>
    //<p>Is Loading...</p>
  )
}

export { ToDoLoading };