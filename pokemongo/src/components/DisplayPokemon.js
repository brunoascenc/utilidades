import React from "react";
import Table from "react-bootstrap/Table";
import "../App.css";

export default function DisplayPokemon({ filteredPoke, sortedPoke, searched }) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Stage</th>
            <th>GEN</th>
            <th>ATK</th>
            <th>DEF</th>
            <th>STA</th>
            <th>Type 1</th>
            <th>Type 2</th>
            <th>Weather1</th>
            <th>Weather2</th>
            <th>Hatchable</th>
          </tr>
        </thead>
        {searched === ""
          ? sortedPoke.map((data) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <td>{data.pokedexnumber}</td>
                      <td>{data.name}</td>
                      <td>{data.evolutionstage}</td>
                      <td>{data.generation}</td>
                      <td>{data.atk}</td>
                      <td>{data.def}</td>
                      <td>{data.sta}</td>
                      <td>{data.type1}</td>
                      <td>{data.type2}</td>
                      <td>{data.weather1}</td>
                      <td>{data.weather2}</td>
                      <td>{data.hatchable}</td>
                    </tr>
                  </tbody>
                </>
              );
            })
          : filteredPoke.map((data) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <td>{data.pokedexnumber}</td>
                      <td>{data.name}</td>
                      <td>{data.atk}</td>
                      <td>{data.def}</td>
                      <td>{data.sta}</td>
                      <td>{data.type1}</td>
                      <td>{data.type2}</td>
                      <td>{data.weather1}</td>
                      <td>{data.weather2}</td>
                      <td>{data.hatchable}</td>
                    </tr>
                  </tbody>
                </>
              );
            })}
      </Table>
    </>
  );
}
