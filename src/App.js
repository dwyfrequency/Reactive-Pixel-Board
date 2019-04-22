import React, { useState, useEffect } from 'react';
import './App.css';
import { Grid } from './Grid';
import { Button } from './Button';
import { SelectBtn } from './SelectBtn';

export const App = () => {
  const [rowVal, setRowVal] = useState(1);
  const [colVal, setColVal] = useState(20);
  const [colorVal, setColorVal] = useState('red');
  const [board, setBoard] = useState([]);

  // Functions
  const addRow = () => {
    const arr = Array.from({ length: rowVal }, () =>
      Array.from({ length: colVal }, () => {})
    );
    setBoard(board.concat(arr));
  };

  const clearBoard = () => {
    setBoard([]);
  };

  const toggleCellColor = e => {
    const elementBc = e.target.style.backgroundColor;
    e.target.style.backgroundColor = elementBc === colorVal ? 'gray' : colorVal;
  };

  /* tons of issues with paintallcells and paintremaining */

  const paintAllCells = () => {};

  const paintRemaining = () => {};

  return (
    <div className="App">
      <h1>Reactive Pixel Board</h1>
      <div>
        <Button id="add-row" callback={addRow}>
          Add a row
        </Button>
        <Button id="clear" callback={clearBoard}>
          Clear
        </Button>
        <Button id="paint-all" callback={paintAllCells}>
          Paint All
        </Button>
        <Button id="paint-remaining" onClick={paintRemaining}>
          Paint Remaining
        </Button>
        <SelectBtn colorVal={colorVal} setColorVal={setColorVal} />
        <input
          type="text"
          name="row"
          value={rowVal}
          placeholder="1"
          onChange={e => setRowVal(e.target.value)}
        />
        <input
          type="text"
          name="column"
          value={colVal}
          placeholder="20"
          onChange={e => setColVal(e.target.value)}
        />
      </div>
      <Grid
        board={board}
        colorVal={colorVal}
        toggleCellColor={toggleCellColor}
      />
    </div>
  );
};
