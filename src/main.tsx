import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider, Store } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';

import App from "./components/app";



const initialState = {};

const store: Store<any> = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
