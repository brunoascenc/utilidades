import React, { useState } from 'react';
import './App.css';

interface IState {
  people: {
    name: string;
    age: number;
    note?: string;
    url: string;
  }[];
}

const App: React.FC = () => {
  const [people, setPeople] = useState<IState['people']>([]);

  // people.map((person) => {
  //   person.age;
  // });

  return (
    <div className="App">
      <h1>People invited to my party</h1>
    </div>
  );
};

export default App;
