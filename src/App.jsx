import React from 'react'
import Home from './Components/Home'
import Sami from './Components/Sami'
import About from './Components/About'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/Navbar';
import "./App.css"

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Sami/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  )
}

export default App