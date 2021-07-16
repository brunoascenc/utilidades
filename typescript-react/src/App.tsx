import React from 'react';
import './App.css';
import { Counter } from './Counter';
import { TextField } from './TextField';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>a</h1>
      <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>count</button>
          </div>
        )}
      </Counter>
      <TextField text="oioi" person={{ firstName: 'asas', lastName: 'as' }} />
    </div>
  );
};

export default App;
