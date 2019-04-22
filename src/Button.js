import React from 'react';

export const Button = props => (
  <button id={props.id} onClick={props.callback}>
    {props.children}
  </button>
);
