import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {combineReducers, createStore, applyMiddleware} from 'redux';

import productReducer from './productRedux';

// define initial state and shallow-merge initial data
const initialState = {
  products: {
    loading: {           // loading zawiera informacje o wczytywaniu danych
      active: false,     // active mówi nam czy trwa wczytywanie
      error: false,      // error będzie zawierał ew. komunikat błędu
    },
    data: [],            // data będzie zawierać tablicę produktów, które pobierzemy z API.
  },
};

// define reducers
const reducers = {
  products: productReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(  // W ten sposób będą działać jednocześnie narzędzia developerskie dla Reduksa, jak i Thunk.
    applyMiddleware(thunk)
  )
);

export default store;