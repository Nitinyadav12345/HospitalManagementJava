import React from 'react';
import ReactDOM from 'react-dom/client'; // Update this import
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <ToastContainer/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
