import React from 'react';
import Lock from '../../assets/icons/lock.png';
import Percentage from '../../assets/icons/001-percentage.png';
import Delivery from '../../assets/icons/002-delivery-truck.png';
import Arrow from '../../assets/icons/arrow.png';
import Container from '../container/container';
import { SubHeaderContainer, SubHeaderItem } from './styles';

const SubHeader = () => {
  return (
    <SubHeaderContainer>
      <Container>
        <SubHeaderItem>
          <img src={Lock} alt="lock" /> <span>Compra 100% segura</span>
        </SubHeaderItem>
        <SubHeaderItem>
          <img src={Arrow} alt="arrow" /> <span>1 Troca grátis</span>
        </SubHeaderItem>
        <SubHeaderItem>
          <img src={Percentage} alt="percentage" />
          <span>5x sem juros</span>
        </SubHeaderItem>
        <SubHeaderItem>
          <img src={Delivery} alt="delivery" />
          <span>Entregas em todo brasil</span>
        </SubHeaderItem>
      </Container>
    </SubHeaderContainer>
  );
};

export default SubHeader;
