import React, { useState, createContext } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

const ToDoContext = createContext();

function ToDoProvider({ children }) {
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
    error
    } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const completedToDos = toDos.filter(toDo => !!toDo.completed).length;
  const totalToDos = toDos.length;

  const searchedToDos = toDos.filter((toDo) => {
      const toDoText = toDo.text.toLowerCase();
      const searchedText = searchValue.toLocaleLowerCase();
      return toDoText.includes(searchedText);
    }
  );

  const addToDo = (text) => {
    const newToDos = [...toDos];
    newToDos.push({
      text,
      completed: false,
    })
    saveToDos(newToDos);
  };

  const completeToDo = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text === text
    );
    newToDos[toDoIndex].completed = true;
    saveToDos(newToDos);
  };

  const deleteToDo =(text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text === text
    );
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos);
  };

  return (
    <ToDoContext.Provider value={{loading,
      error,
      completedToDos,
      totalToDos,
      searchedToDos,
      searchValue,
      setSearchValue,
      completeToDo,
      deleteToDo,
      openModal,
      addToDo,
      setOpenModal,}}>
      {children}
    </ToDoContext.Provider>
  )
}

export { ToDoContext, ToDoProvider };