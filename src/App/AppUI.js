import React from 'react';

import { ToDoCounter } from '../components/ToDoCounter';
import { ToDoSearcher } from '../components/ToDoSearcher';
import { ToDoList } from '../components/ToDoList';
import { CreateToDoButton } from '../components/CreateToDoButton';
import { ToDoItem } from '../components/ToDoItem';
import { ToDoLoading } from '../components/ToDoLoading';
import { ToDoError } from '../components/ToDoError';
import { EmptyToDo } from '../components/EmptyToDo';

import { ToDoContext } from '../Context';

import './App.css';

function AppUI() {
  return (
    <>
      <ToDoCounter />
      <ToDoSearcher />

      <ToDoContext.Consumer >
        {({
          loading,
          error,
          searchedToDos,
          completeToDo,
          deleteToDo
        }) => (
          <ToDoList>
            {loading && (
              <>
                <ToDoLoading />
              </>
            )}
            {error && <ToDoError />}
            {(!loading && searchedToDos.lenght === 0) && <EmptyToDo />}

            {searchedToDos.map(toDo => (
              <ToDoItem
                key={toDo.text}
                text={toDo.text}
                completed={toDo.completed}
                onComplete={() => completeToDo(toDo.text)}
                onDelete={() => deleteToDo(toDo.text)}
              />
            ))}
          </ToDoList>
        )}
      </ToDoContext.Consumer>


      <CreateToDoButton />
    </>
  )
}

/* const renderTodoItemList = (searchedToDos, completeToDo, deleteToDo) => searchedToDos.map((toDo) => (
  <ToDoItem
    key={toDo.text}
    text={toDo.text}
    completed={toDo.completed}
    onComplete={() => completeToDo(toDo.text)}
    onDelete={() => deleteToDo(toDo.text)}
  />
));

const renderToDoList = (error, searchedToDos, completeToDo, deleteToDo) => (
  <ToDoList>
      {error && <ToDoError/>}
      {searchedToDos.length === 0
        ? <EmptyToDo />
        : renderTodoItemList(searchedToDos, completeToDo, deleteToDo)
      }
  </ToDoList>
);

const renderUI = (error, searchedToDos, completeToDo, deleteToDo) => {
  const renderToDoListProps = {
    error,
    searchedToDos,
    completeToDo,
    deleteToDo
  };

  return <>
    <ToDoCounter />
    <ToDoSearcher />
    {renderToDoList(renderToDoListProps)}
    <CreateToDoButton />
  </>
};

function AppUI(loading) {
  return (
    <div className="App">
      {loading ? < ToDoLoading /> : renderUI()}
    </div>
  );


    return (
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
  );
}

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
      {renderToDoListProps.error && <ToDoError/>}
      {renderToDoListProps.searchedToDos.length === 0
        ? <EmptyToDo />
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

function AppUI() {
  return (
    <div className="App">
      {loading ? < ToDoLoading /> : renderUI(renderUIProps)}
    </div>
  );  */

export { AppUI };