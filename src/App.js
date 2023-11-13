import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Classes from './pages/Classes';
import Homework from './pages/Homework';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/classes" element={<Classes />}/>
        <Route path="/homework" element={<Homework />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App