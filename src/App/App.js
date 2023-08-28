import React, { useEffect, useState } from 'react';

import { AppUI } from './AppUI';

import { useLocalStorage } from '../hooks/useLocalStorage';
import "./App.css";

function App() {
  const [toDos, saveToDos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');

  const completedToDos = toDos.filter(toDo => !!toDo.completed).length;
  const totalToDos = toDos.length;

  console.log('Log 1');
  useEffect(() => {
    console.log('Log 2');
  });
  console.log('Log 3');

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
