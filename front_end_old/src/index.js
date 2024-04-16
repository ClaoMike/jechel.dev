import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'API/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import APIService from 'API/APIService';

// eslint-disable-next-line no-unused-vars
const api = new APIService();

// Use createRoot from react-dom/client
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();