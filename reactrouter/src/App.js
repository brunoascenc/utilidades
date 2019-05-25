import React from 'react';
import './App.css';
import About from './About'
import Nav from './Nav'
import Shop from './Shop'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <About/>
        <Shop/>
      </header>
    </div>
  );
}

export default App;
