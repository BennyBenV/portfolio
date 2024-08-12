// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import ProjetList from './components/ProjetList';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <ProjetList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
