import React, { useState, Dispatch, SetStateAction } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from "./pages/Home"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import './App.css'

interface DummyProps {
  number: number
  setNumber: Dispatch<SetStateAction<number>>
}

const App: React.FC<DummyProps> = () => {
  return (
    <Router>
      <main className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          {/* <BottomNav /> */}
      </main>
    </Router>
  )
}

export default App;