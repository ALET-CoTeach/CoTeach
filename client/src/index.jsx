import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Redux from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import allReducers from './redux/reducer';

const store = Redux.createStore(
  allReducers,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION(),
);

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
    document.getElementById('root'),
  </Provider>,
);
