import React, { useContext } from "react";

import { ToDoContext } from '../../Context';

import './ToDoSearcher.css';

function ToDoSearcher() {
  const { searchValue, setSearchValue } = useContext(ToDoContext)

  return (
    <input placeholder="cutting onion"
      className="ToDoSearcher"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
};

export { ToDoSearcher };