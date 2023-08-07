import { ToDoCounter } from './components/ToDoCounter';
import { ToDoSearcher } from './components/ToDoSearcher';
import { ToDoList } from './components/ToDoList';
import { CreateToDoButton } from './components/CreateToDoButton';
import { ToDoItem } from './components/ToDoItem';

import './App.css';

function App() {
  return (
    <div className="App">
      <ToDoCounter />
      <ToDoSearcher />

      <ToDoList>
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </ToDoList>
      <CreateToDoButton />

    </div>
  );
};



export default App;
