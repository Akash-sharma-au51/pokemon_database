import React from 'react'
import {BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Pokemon from './components/Pokemon';

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header/>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/pokemon' element = {<Pokemon/>}/>
        <Route/>
        </Routes>
        
        
      </Router>
      
    </div>
  )
}

export default App
