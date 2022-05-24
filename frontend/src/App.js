import logo from './logo.svg';
import './App.css';
import React from "react"
import Note_page from './Pages/Note_page';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import DefaultPage from './Pages/Default_page';
import Error_page from './Pages/Error_page';
import Header from './Containers/header/Header'
import Bubbles from './Components/bubbles/Bubbles'


function App() {
  
  
  
  
  
  return (

  
  <Router>
    <div>
    <Header />
      <Routes>
        <Route path="/"  element={<DefaultPage/>} />
          
        <Route path="/notes" element={<Note_page />} />
        
        
        
      </Routes>
      <Bubbles />
      </div>
  </Router>



  
    )
}

export default App;
