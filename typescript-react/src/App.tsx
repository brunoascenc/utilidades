import React from 'react';
import './App.css';
import { TextField } from './TextField';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>a</h1>
      <TextField text="oioi" person={{ firstName: 'asas', lastName: 'as' }} />
    </div>
  );
};

export default App;
