import { useContext, useState, useEffect } from "react";
import { DataContext } from "../data/DataProvider";

export default function useFilter() {
  const value = useContext(DataContext);
  const [orderBy, setOrderBy] = useState("");
  const [pokemon] = value.pokemon;
  const [filteredPokes, setFilteredPokes] = useState([]);
  const [search, setSearch] = useState("");

  //Search input
  useEffect(() => {
    setFilteredPokes(
      pokemon.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, pokemon]);

  //Filter options
  const sorted = pokemon.sort((a, b) => {
    const orderPokes =
      orderBy === "desc"
        ? b.pokedexnumber - a.pokedexnumber
        : orderBy === "asc"
        ? a.pokedexnumber - b.pokedexnumber
        : orderBy === "atk"
        ? b.atk - a.atk
        : orderBy === "stam"
        ? b.sta - a.sta
        : orderBy === "def"
        ? b.def - a.def
        : "";
    return orderPokes;
  });

  return [setSearch, filteredPokes, setOrderBy, orderBy, search, sorted];
}
