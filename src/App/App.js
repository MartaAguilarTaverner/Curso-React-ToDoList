import React, { useState } from 'react';

import { AppUI } from './AppUI';

import { useLocalStorage } from '../hooks/useLocalStorage';
import "./App.css";

function App() {
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

  const completeToDo = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text === text
    );
    newToDos[toDoIndex].completed = true;
    saveToDos(newToDos);
  };

  const deleteToDo = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text === text
    );
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos);
  };

  return (
    <AppUI
    loading={loading}
    error={error}
    completedToDos={completedToDos}
    totalToDos={totalToDos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedToDos={searchedToDos}
    completeToDo={completeToDo}
    deleteToDo={deleteToDo}
    />
  );
};



export default App;
