import React, { useState, createContext, useMemo, useCallback} from "react";

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

  const completedToDos = toDos.filter(toDo => !!toDo.completed).length;
  const totalToDos = toDos.length;

  const searchedToDos = toDos.filter((toDo) => {
      const toDoText = toDo.text.toLowerCase();
      const searchedText = searchValue.toLocaleLowerCase();
      return toDoText.includes(searchedText);
    }
  );

  const completeToDo =useCallback((text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text === text
    );
    newToDos[toDoIndex].completed = true;
    saveToDos(newToDos);
  }, [saveToDos, toDos]);

  const deleteToDo =useCallback((text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text === text
    );
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos);
  }, [saveToDos, toDos]);

  const toDoProps = useMemo(() => ({
      loading,
      error,
      completedToDos,
      totalToDos,
      searchValue,
      setSearchValue,
      searchedToDos,
      completeToDo,
      deleteToDo,
}), [completeToDo, completedToDos, deleteToDo, error, loading, searchValue, searchedToDos, totalToDos]);

  return (
    <ToDoContext.Provider value={toDoProps}>
      {children}
    </ToDoContext.Provider>
  )
}

export { ToDoContext, ToDoProvider };