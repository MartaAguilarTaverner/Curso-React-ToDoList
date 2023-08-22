import React from "react";
import { BsCheckCircle, BsCheckCircleFill } from 'react-icons/bs';

import './completeIcon.css';

function CompleteIcon({ done, onClick }) {
  const iconSelected = done ? <BsCheckCircleFill /> : <BsCheckCircle />;
  return (
    <span
      className={done ? 'Icon-filled-done' : 'Icon-unfilled'}
      onClick={onClick}>
      {iconSelected}
    </span>
  )
};

export { CompleteIcon }