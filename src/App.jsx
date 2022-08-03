import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './layout/Home';

import './app.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
