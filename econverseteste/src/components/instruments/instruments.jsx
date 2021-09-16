import React from 'react';
import Guitarra from '../../assets/instruments/guitarra.png';
import Violao from '../../assets/instruments/violao.png';
import Mic from '../../assets/instruments/bass.png';
import Mesa from '../../assets/instruments/twinplex.png';
import Teclado from '../../assets/instruments/teclado.png';
import Bateria from '../../assets/instruments/bateria.png';
import { InstrumentsContainer, Item } from './styles';
import Container from '../container/container';

const Instruments = () => {
  return (
    <Container>
      <InstrumentsContainer>
        <Item>
          <img src={Guitarra} alt="Guitarras" />
          <p>Guitarras</p>
        </Item>
        <Item>
          <img src={Mic} alt="Microfones" />
          <p>Microfones</p>
        </Item>
        <Item>
          <img src={Mesa} alt="Mesa de som" />
          <p>Mesa de som</p>
        </Item>
        <Item>
          <img src={Teclado} alt="Teclados" />
          <p>Teclados</p>
        </Item>
        <Item>
          <img src={Violao} alt="Violão" />
          <p>Violão</p>
        </Item>
        <Item>
          <img src={Bateria} alt="Baterias" />
          <p>Baterias</p>
        </Item>
      </InstrumentsContainer>
    </Container>
  );
};

export default Instruments;
