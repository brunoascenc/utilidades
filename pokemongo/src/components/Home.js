import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { DataContext } from "../data/DataProvider";
import useFilter from "./useFilter";
import DisplayPokemon from "./DisplayPokemon";
import PokeSelect from "./PokeSelect";
import PokesPagination from "./Pagination";

export default function Home() {
  const value = useContext(DataContext);
  const [pokemon] = value.pokemon;
  
  //Filter vars
  const [
    setSearch,
    filteredPokes,
    setOrderBy,
    orderBy,
    search,
    sorted,
  ] = useFilter();

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pokesPerPage] = useState(35);

  //Current Pokes
  const indexOfLastPoke = currentPage * pokesPerPage;
  const indexOfFirstPoke = indexOfLastPoke - pokesPerPage;
  const currentPokes = sorted.slice(indexOfFirstPoke, indexOfLastPoke);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col md={5}>
            <h1>Species POKEMON GO</h1>
          </Col>
        </Row>
        <Form.Group>
          <Row>
            <Col md={7}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Procure por um pokemon..."
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Col md={5}>
              <PokeSelect setOrderBy={setOrderBy} />
            </Col>
          </Row>
        </Form.Group>
        <Row>
          <DisplayPokemon
            filteredPoke={filteredPokes}
            sortedPoke={currentPokes}
            searched={search}
          />
          <PokesPagination
            pokesPerPage={pokesPerPage}
            totalPokes={pokemon.length}
            paginate={paginate}
          />
        </Row>
      </Container>
    </div>
  );
}
