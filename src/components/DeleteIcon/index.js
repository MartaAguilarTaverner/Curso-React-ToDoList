import React from "react";
import  { BsXCircleFill } from 'react-icons/bs'

import './DeleteIcon.css';

function DeleteIcon({onClick}) {
  return(
    <span className='Icon-delete' onClick={onClick}>
      <BsXCircleFill />
    </span>
  )
};

export { DeleteIcon }