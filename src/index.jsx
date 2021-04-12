import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';


import Intro from './components/Intro';
import Navbar from "./components/Navbar";
import Howto from "./components/Howto";
import Main from "./components/Main";
import Footer from "./components/Footer";


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <br /><br /><br /><br />
    <Intro />
    <Howto />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.body
);