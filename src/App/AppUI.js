import React from 'react';

import { ToDoCounter } from '../components/ToDoCounter';
import { ToDoSearcher } from '../components/ToDoSearcher';
import { ToDoList } from '../components/ToDoList';
import { CreateToDoButton } from '../components/CreateToDoButton';
import { ToDoItem } from '../components/ToDoItem';

import './App.css'

const renderTodoItemList = (searchedToDos, completeToDo, deleteToDo) => searchedToDos.map((toDo) => (
  <ToDoItem
    key={toDo.text}
    text={toDo.text}
    completed={toDo.completed}
    onComplete={() => completeToDo(toDo.text)}
    onDelete={() => deleteToDo(toDo.text)}
  />
));

const renderToDoList = (renderToDoListProps) => (
  <ToDoList>
      {renderToDoListProps.error && <p>Alert Error!!!</p>}
      {renderToDoListProps.searchedToDos.length === 0
        ? <p>Create your first To Do!!</p>
        : renderTodoItemList(renderToDoListProps.searchedToDos, renderToDoListProps.completeToDo, renderToDoListProps.deleteToDo)
      }
  </ToDoList>
);

const renderUI = (renderUIProps) => {
  const renderToDoListProps = {
    error: renderUIProps.error,
    searchedToDos: renderUIProps.searchedToDos,
    completeToDo: renderUIProps.completeToDo,
    deleteToDo: renderUIProps.deleteToDo
  };

  return <>
    <ToDoCounter completed={renderUIProps.completedToDos} total={renderUIProps.totalToDos} />
    <ToDoSearcher searchValue={renderUIProps.searchValue} setSearchValue={renderUIProps.setSearchValue} />
    {renderToDoList(renderToDoListProps)}
    <CreateToDoButton />
  </>
};

function AppUI({
  loading,
  error,
  completedToDos,
  totalToDos,
  searchValue,
  setSearchValue,
  searchedToDos,
  completeToDo,
  deleteToDo,
}) {
  const renderUIProps = {
    completedToDos,
    totalToDos,
    searchValue,
    setSearchValue,
    error,
    searchedToDos,
    completeToDo,
    deleteToDo
  };

  return (
    <div className="App">
      {loading ? <p>Loading...</p> : renderUI(renderUIProps)}
    </div>
  );


  /* return (
    <div className="App">
      <ToDoCounter completed={completedToDos} total={totalToDos} />

      <ToDoSearcher searchValue={searchValue} setSearchValue={setSearchValue} />

      <ToDoList>
        {loading && <p>Loading...</p>}
        {error && <p>Alert Error!!!</p>}
        {(!loading && searchedToDos.lenght === 0) && <p>Create your first To Do!!</p>}

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
  ); */
}

export { AppUI };