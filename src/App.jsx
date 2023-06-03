import React from 'react';
import Home from './pages/Main/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.module.css';
import UserBrief from '../src/pages/AfterSearch/UserBrief/userBrief';

function App() {

  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />}/>
        <Route path="/userbrief/:address" element={<UserBrief />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
