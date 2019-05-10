import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

// Initial State
const initialState = {
  grid: [],
};

const addGridRow = (n = 20) => {
  return Array.from({ length: n }, () => '');
};

// Actions
const ADD_ROW = 'ADD_ROW';
const COLORIZE = 'COLORIZE';

// Action creators
export const addRow = () => ({ type: ADD_ROW });
export const colorize = () => ({ type: COLORIZE });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROW:
      return {
        ...state,
        grid: state.grid.concat(addGridRow(20)),
      };
      break;
    case COLORIZE:
      break;
    default:
      break;
  }
};

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store;
