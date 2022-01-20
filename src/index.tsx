import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter } from 'react-router-dom'
import axios from 'axios';
import {RequestProvider} from 'react-request-hook';

const axiosInstance = axios.create({
    baseURL : 'http://localhost:4000/'
})

ReactDOM.render(

 <BrowserRouter>
     <RequestProvider value={axiosInstance} >
         <App />
     </RequestProvider>
 </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
     // <React.StrictMode>
     // </React.StrictMode>
