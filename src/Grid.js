import React, { useState, useEffect } from 'react';
import './Grid.css';
import { Cell } from './Cell';

export const Grid = ({ board, colorVal, toggleCellColor }) => {
  const grid = board.map((row, rowIdx) => (
    <tr key={`row#${rowIdx}`}>
      {row.map((_, colIdx) => (
        <Cell key={`row#${rowIdx}- col#${colIdx}`} className={''} />
      ))}
    </tr>
  ));
  return (
    <table>
      <tbody onClick={toggleCellColor}>{grid}</tbody>
    </table>
  );
};
