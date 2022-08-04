import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './layout/Home';
import AppHeader from './layout/AppHeader';

import './app.css';
import Footer from './layout/Footer';

function App() {
  return (
    <div className="App">
      <AppHeader>My To Do List</AppHeader>
      <Routes>
        <Route path = '/' element={<Home/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
