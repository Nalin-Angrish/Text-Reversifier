import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import reportWebVitals from './reportWebVitals';


import App from './App';
import Navbar from "./Navbar";


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <br /><br /><br /><br />
    <App />
  </React.StrictMode>,
  document.body
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
