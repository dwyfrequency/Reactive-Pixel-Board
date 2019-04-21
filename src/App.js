import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <h1>Reactive Pixel Board</h1>
      <div>
        <button id="add-row">Add a row</button>
        <select>Color Selector</select>
      </div>
      <table>placeholder for table</table>
    </div>
  );
};
