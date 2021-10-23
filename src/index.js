import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './styles.css'
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from "./Store/store";
import * as serviceWorker from './serviceWorker';

const store = setupStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your Store to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
