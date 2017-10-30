import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import storeFactory from './store'
import * as actions from './actions'
import App from './components/App';

const store = storeFactory();

window.store = store;
window.actions = actions;

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("app-root")
);


