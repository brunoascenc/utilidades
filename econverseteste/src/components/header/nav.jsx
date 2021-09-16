import React from 'react';
import Container from '../container/container';
import Poligono from '../../assets/icons/poligono.png';
import { Nav } from './styles';

const Navigation = () => {
  return (
    <Nav>
      <Container>
        <ul>
          <li>
            <a href="/#">Todas as categorias</a>
          </li>
          <li>
            <a href="/#">Som profissional</a>{' '}
            <img src={Poligono} alt="search" />
          </li>
          <li>
            <a href="/#">Instrumentos Musicais</a>{' '}
            <img src={Poligono} alt="search" />
          </li>
          <li>
            <a href="/#">Promoções</a>
          </li>
          <li>
            <a href="/#">Contato</a>
          </li>
        </ul>
      </Container>
    </Nav>
  );
};

export default Navigation;
