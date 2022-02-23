import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Header from './components/header/header';
import Account from './pages/account/account';
import CreateQuiz from './pages/createQuiz/createQuiz';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/createquiz" element={<CreateQuiz />} />
    </Routes>
  </div>
);

export default App;
