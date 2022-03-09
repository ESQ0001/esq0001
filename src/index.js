import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.scss';
import App from './App';
import Test from './components/test.jsx';
import Bookflix from './components/Bookflix.jsx';
import AR_Music from './components/AR_Music.jsx';
import FoodRecognizer from './components/FoodRecognizer.jsx';
import Pearly from './components/Pearly.jsx';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import ScrollToTop from "./scrollToTop";

ReactDOM.render(
  
  <BrowserRouter>
  <ScrollToTop>
  <Routes>
  
      <Route exact={true} path="/" element={<App />} />
      <Route exact={true} path="/test" element={<Test />} />
      <Route exact={true} path="/Bookflix" element={<Bookflix />} />
      <Route exact={true} path="/AR%20Music" element={<AR_Music />} />
      <Route exact={true} path="/Food%20recognizer" element={<FoodRecognizer />} />
  
      <Route exact={true} path="/Pearly" element={<Pearly />} />
      
      
      
    </Routes>
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
