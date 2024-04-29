import React, {useState, useEffect} from 'react';
import Home from './page/Home.jsx';
import Login from './login/Login.jsx';
import Dashboard from './admin/DashBoard.jsx';
import ResetPassword from './login/ResetPassword.jsx';
import RelaisOlympique from './page/RelaisOlympique.jsx';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
 
function App() {
 
  return (
    <Router>
      <div>
        <section>                              
            <Routes>                                                                        <Route path="/home" element={<Home/>}/>
            <Route path="/reset" element={<ResetPassword/>}/>
               <Route path="/dashboard" element={<Dashboard/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/relais" element={<RelaisOlympique/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;