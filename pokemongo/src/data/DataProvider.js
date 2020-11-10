import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [pokemon, setPokemon] = useState([]);

  //API Data
  const getData = () => {
    fetch(`https://sheetlabs.com/2103/pokemongo`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setPokemon(result);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  //API Values
  const value = {
    pokemon: [pokemon, setPokemon],
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
