import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './layout/Home';
import AppHeader from './layout/AppHeader';

import './app.css';

function App() {
  return (
    <div className="App">
      <AppHeader className="header">My To Do List</AppHeader>
      <Routes>
        <Route path = '/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
