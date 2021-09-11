import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
  people: {
    name: string;
    age: number;
    note?: string;
    url: string;
  }[];
}

const App: React.FC = () => {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Lebron James',
      url: 'https://www.lakersbrasil.com/data/posts/noticia-secundaria_60f7545d56a91_quadrada.jpg',
      age: 36,
      note: 'the goat',
    },
  ]);

  console.log(typeof people);

  // people.map((person) => {
  //   person.age;
  // });

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
};

export default App;
