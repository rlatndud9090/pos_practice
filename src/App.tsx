import React from 'react';
import './App.css';
import NaviBar from './components/NaviBar';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="app">
      <NaviBar />
      <Home />
    </div>
  );
};

export default App;
