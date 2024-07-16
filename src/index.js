import React from 'react';
import ReactDOM from 'react-dom/client';
/* css start here */
import 'bootstrap/dist/css/bootstrap.css';
/* Custom CSS */
import './style/menu.css';
import './style/main.css';
/* slick slider css for latest arrival and blogs slider */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
/* import slick slider css for latest arrival and blogs slider */
/* import css end here */
import App from './App';
import reportWebVitals from './reportWebVitals';
/* Bootstrap Javascript */
import 'bootstrap/dist/js/bootstrap.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
