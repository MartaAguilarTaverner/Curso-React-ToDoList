import React, { useState } from 'react';

import { ToDoCounter } from './components/ToDoCounter';
import { ToDoSearcher } from './components/ToDoSearcher';
import { ToDoList } from './components/ToDoList';
import { CreateToDoButton } from './components/CreateToDoButton';
import { ToDoItem } from './components/ToDoItem';

import "./App.css";

const defaultToDos = [{ text:'Cut onion', completed: false },
  { text:'Finishing the course of React', completed: false },
  { text: 'Eat lunch', completed: true },
  { text: 'Home chores', completed: true },
  {text: 'Daily training', completed: false },
  {text: 'Use derivate states', completed: true }
];

function App() {
  const [toDos, setToDos] =useState(defaultToDos);
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

  const completeToDo = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text === text
    );
    newToDos[toDoIndex].completed = true;
    setToDos(newToDos);
  }

  const deleteToDo = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex(
      (toDo) => toDo.text === text
    );
    newToDos.splice(toDoIndex, 1);
    setToDos(newToDos);
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
