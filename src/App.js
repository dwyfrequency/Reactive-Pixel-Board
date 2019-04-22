import React, { useState, useEffect } from 'react';
import './App.css';

export const App = () => {
  const [rowVal, setRowVal] = useState(1);
  const [colVal, setColVal] = useState(20);
  const [colorVal, setColorVal] = useState('red');
  const [board, setBoard] = useState([]);
  const [styles, setStyles] = useState({
    backgroundColor: 'purple',
    width: 25,
    height: 25,
  });

  // Functions
  const addCells = () => {
    const arr = Array.from({ length: rowVal }, () =>
      Array.from({ length: colVal }, () => {})
    );
    setBoard(board.concat(arr));
  };

  const clearBoard = params => {
    setBoard([]);
  };

  const paintAllCells = () => {
    setStyles({ ...styles, backgroundColor: colorVal });
  };

  return (
    <div className="App">
      {console.log('rending')}
      <h1>Reactive Pixel Board</h1>
      <div>
        <button id="add-row" onClick={addCells}>
          Add a row
        </button>
        <button id="clear" onClick={clearBoard}>
          Clear
        </button>
        <button id="paint-all" onClick={paintAllCells}>
          Paint All
        </button>
        <button id="paint-remaining">Paint Remaining</button>
        <select onChange={e => setColorVal(e.target.value)} value={colorVal}>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="mango">Mango</option>
        </select>
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
      <table>
        <tbody>
          {board.map((row, rowIdx) => (
            <tr key={`row#${rowIdx}`}>
              {row.map((_, colIdx) => (
                <td key={`row#${rowIdx}- col#${colIdx}`} style={styles} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
