import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// render() has two parameters i.e., what you want to show AND where you want to show
// the contents from app.js goes to index.js and then index.html
// all the what you want to show is in app.js and its sub-functional components
// all it will be diplayed in the root element in index.html
ReactDOM.render(
  <App/>
  ,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
