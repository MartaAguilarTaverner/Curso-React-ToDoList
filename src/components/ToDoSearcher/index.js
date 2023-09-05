import React, { useContext } from "react";

import './ToDoSearcher.css';
import { ToDoContext } from "../../Context";

function ToDoSearcher() {
  const {
    searchValue,
    setSearchValue,
  } = useContext(ToDoContext)
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