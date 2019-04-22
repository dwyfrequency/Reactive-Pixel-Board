import React from 'react';

export const SelectBtn = ({ colorVal, setColorVal }) => (
  <select onChange={e => setColorVal(e.target.value)} value={colorVal}>
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
  </select>
);
