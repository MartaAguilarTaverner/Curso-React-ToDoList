import React from 'react';

import { ToDoCounter } from './components/ToDoCounter';
import { ToDoSearcher } from './components/ToDoSearcher';
import { ToDoList } from './components/ToDoList';
import { CreateToDoButton } from './components/CreateToDoButton';
import { ToDoItem } from './components/ToDoItem';

import "./App.css";

const defaultToDo = [{ text:'Cut onion', completed: false },
  { text:'Finishing the course of React', completed: false },
  { text: 'Eat lunch', completed: true },
  { text: 'Home chores', completed: true },
  {text: 'Daily training', completed: false }
];

function App() {
  return (
    <div className="App">
      <ToDoCounter completed={16} total={25} />
      <ToDoSearcher />

      <ToDoList>
        {defaultToDo.map((todo) => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </ToDoList>
      <CreateToDoButton />

    </div>
  );
};



export default App;
