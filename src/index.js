import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from './routes/Home'
import Contact from './routes/Contact'
import App from './App';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/home' element={<Home />}/>
    <Route path='/contact' element={<Contact />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
