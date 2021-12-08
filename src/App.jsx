import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './features/Header/Header';
import Home from './features/Home/Home';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Home />
      </main>
      <aside></aside>
    </Router>
  );
}

export default App;
