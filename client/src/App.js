import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./components/LandingPage"
import Login from './components/Login';
import Signup from './components/SignUp';
import Home from './components/Home';
import Error from './components/Error'
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
    <Fragment>
         <Routes>
         <Route path="/" element={<LandingPage />}/> 
           <Route path="/login" element={<Login />}/> 
           <Route path="/signup" element={<Signup />}/> 
           <Route element={<PrivateRoutes />}>
               <Route element={<Home/>} path="/home" exact/>         
               <Route element={<Error/>} path="/*"/>
           </Route>
         </Routes>
   </Fragment>
    
  );
}

export default App;
