import React from 'react';
//components
import Container from '../container/container';
import SubHeader from './sub-header';
import Navigation from './nav';
import ShoppingBag from './shopping-bag';
import Input from './input-box';
import UserLinks from './user-links';
//icons
import Logo from '../../assets/logo/logo.png';
import Whats from '../../assets/icons/wpp.png';
//css
import { HeaderContainer, HeaderELements, Contato } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <SubHeader />
      <Container>
        <HeaderELements>
          <a href="/#">
            <img src={Logo} alt="logo" />
          </a>
          <Input />
          <Contato>
            <img src={Whats} alt="contato" />
            <span>(11) 99999-9999</span>
          </Contato>
          <UserLinks />
          <ShoppingBag />
        </HeaderELements>
      </Container>
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
