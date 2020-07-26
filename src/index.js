import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Remove
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import StarWarsContext from './context/StarWarsContext';
import store from './store'; // Remove

// Remove <Provider>
ReactDOM.render(
  <Provider store={store}>
    <StarWarsContext>
      <App />
    </StarWarsContext>
  </Provider>,
  document.getElementById('root'),
);
