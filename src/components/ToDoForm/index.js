import React, { useContext, useState } from "react";

import './ToDoForm.css';
import { ToDoContext } from "../../Context";

function ToDoForm() {

  const {
    addToDo,
    setOpenModal,
  } = useContext(ToDoContext);
  const [newToDoValue, setNewToDoValue] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addToDo(newToDoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewToDoValue(event.target.value);
  }


  return (
    <form onSubmit={onSubmit} className="Form-container">
      <label className="Form-label"> Write your new task!</label>
      <textarea className="Form-text"
        maxLength={500}
        placeholder="Finish the React Course of Platzi"
        value={newToDoValue}
        onChange={onChange}
      />
      <div className="Form-buttons">
        <button
        type="button"
        onClick={onCancel}
        className="Form-button Form-button--cancel">Cancel</button>
        <button
        type="submit"
        className="Form-button Form-button--add">Add</button>
      </div>
    </form>
  )
};


export { ToDoForm };