import React from 'react';
import Avatar from '../../assets/icons/avatar.png';
import Poligono from '../../assets/icons/poligono.png';
import { User } from './styles';

const UserLinks = () => {
  return (
    <User>
      <img src={Avatar} alt="avatar" />
      <div>
        <div className="user">
          <span>Olá, visitante</span> <img src={Poligono} alt="search" />
        </div>
        <a href="/#">Minha conta</a>
      </div>
    </User>
  );
};

export default UserLinks;
