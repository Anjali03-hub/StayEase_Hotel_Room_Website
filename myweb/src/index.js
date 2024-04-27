import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route}from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import Nav1 from './nav';
import Main from './main';
import Facilities from './facility';
import About from './about';
import Contact from './contact';
import Login from './admin/login';
import Admin from './admin/adminpanel';
import User from './admin/User';
import Detail from './detail';
import Bookhotel from './roombook';
import UserBooking from './admin/userbooking';
import ViewContact from './admin/viewcontact';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/fact' element={<Facilities/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/admin' element={<Login/>}/>
    <Route path='/adminpanel' element={<Admin/>}/>
    <Route path='/reguser' element={<User/>}/>
    <Route path='/detail' element={<Detail/>}/>
    <Route path='/roombooking' element={<Bookhotel/>}/>
    <Route path='/viewbooking' element={<UserBooking/>}/>
    <Route path='/viewcontact' element={<ViewContact/>}/>


    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
