import React, { useState } from 'react';

import { ToDoCounter } from './components/ToDoCounter';
import { ToDoSearcher } from './components/ToDoSearcher';
import { ToDoList } from './components/ToDoList';
import { CreateToDoButton } from './components/CreateToDoButton';
import { ToDoItem } from './components/ToDoItem';

import "./App.css";

/* const defaultToDos = [{ text:'Cut onion', completed: false },
  { text:'Finishing the course of React', completed: false },
  { text: 'Eat lunch', completed: true },
  { text: 'Home chores', completed: true },
  {text: 'Daily training', completed: false },
  {text: 'Use derivate states', completed: true }
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultToDos)); */
/* localStorage.removeItem('TODOS_V1'); */

function App() {
  const localStorageToDos = localStorage.getItem('TODOS_V1');

  let parsedToDos;

  if (!localStorageToDos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedToDos= [];
  }else {
    parsedToDos = JSON.parse(localStorageToDos);
  }

  const [toDos, setToDos] =useState(parsedToDos);
  const [searchValue, setSearchValue] = useState('');

  const completedToDos = toDos.filter(toDo => !!toDo.completed).length;
  const totalToDos = toDos.length;

  const searchedToDos = toDos.filter((toDo) => {
      const toDoText = toDo.text.toLowerCase();
      const searchedText = searchValue.toLocaleLowerCase();
      return toDoText.includes(searchedText);
      /* return toDo.text.toLowerCase().includes(searchValue.toLowerCase()); */
    }
  );

  const saveToDos = (newToDos) => {
    localStorage.setItem ('TODOS_V1', JSON.stringify(newToDos));

    setToDos(newToDos);
  }

  const completeToDo = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text === text
    );
    newToDos[toDoIndex].completed = true;
    saveToDos(newToDos);
  }

  const deleteToDo = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text === text
    );
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos);
  }


  return (
    <div className="App">
      <ToDoCounter completed={completedToDos} total={totalToDos} />

      <ToDoSearcher searchValue={searchValue} setSearchValue={setSearchValue} />

      <ToDoList>
        {searchedToDos.map((toDo) => (
          <ToDoItem
            key={toDo.text}
            text={toDo.text}
            completed={toDo.completed}
            onComplete={() => completeToDo(toDo.text)}
            onDelete={() => deleteToDo(toDo.text)}
          />
        ))}
      </ToDoList>

      <CreateToDoButton />

    </div>
  );
};



export default App;
