import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import * as ReactDOMClient from 'react-dom/client';


const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
         <App /> 
        </BrowserRouter>
    </Provider>
);
// ReactDOM.render(
//   <Provider store={store}>
// <BrowserRouter>
//   <App />
//   </BrowserRouter>
//   </Provider>,
//   document.getElementById('root')
// )
