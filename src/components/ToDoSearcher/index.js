import React, { useState } from "react";

import './ToDoSearcher.css';

function ToDoSearcher() {
  const [searchValue, setSearchValue] = useState('');

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