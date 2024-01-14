import React from "react";
import ReactDOM from 'react-dom';


import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"; //due to this all bootstrap 5 components working 
import './index.css';
import Apps from "./LandingPage/Apps";
ReactDOM.render(
  <>
  <Apps/>
  </>,
  document.getElementById('root')
)