import React from "react";
import Form from "react-bootstrap/Form";

export default function PokeSelect({ setOrderBy }) {
  const handleOrderBy = (e) => {
    setOrderBy(e.target.value);
  };

  return (
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Control as="select" onChange={handleOrderBy}>
        <option value="">Filtrar...</option>
        <option value="asc">POKEDEX ASC</option>
        <option value="desc">POKEDEX DESC</option>
        <option value="atk">MAX ATTACK</option>
        <option value="def">MAX DEFENSE</option>
        <option value="stam">MAX STAMINA</option>
      </Form.Control>
    </Form.Group>
  );
}
