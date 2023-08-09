import React from "react";

import './ToDoSearcher.css';

function ToDoSearcher({
  searchValue,
  setSearchValue,
}) {

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