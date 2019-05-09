import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

// Initial State
const initialState = {
  grid: [],
};

// Actions
const ADD_ROW = 'ADD_ROW';
const COLORIZE = 'COLORIZE';

// Action creators
const addRow = () => ({ type: ADD_ROW });
const colorize = () => ({ type: COLORIZE });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROW:
      break;
    case COLORIZE:
      break;
    default:
      break;
  }
};

const store = createStore(reducer, applyMiddleware(loggerMiddleware));
