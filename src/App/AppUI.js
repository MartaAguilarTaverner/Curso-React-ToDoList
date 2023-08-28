import React from 'react';

import { ToDoCounter } from '../components/ToDoCounter';
import { ToDoSearcher } from '../components/ToDoSearcher';
import { ToDoList } from '../components/ToDoList';
import { CreateToDoButton } from '../components/CreateToDoButton';
import { ToDoItem } from '../components/ToDoItem';

import './App.css'

function AppUI({
  completedToDos, totalToDos, searchValue, setSearchValue, searchedToDos, completeToDo, deleteToDo
}) {
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
}

export { AppUI };