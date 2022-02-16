import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
);

export default App;
