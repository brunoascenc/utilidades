import React from 'react';
import Search from '../../assets/icons/search.png';
import { InputBox } from './styles';

const Input = () => {
  return (
    <InputBox>
      <input type="text" placeholder="Busque aqui..." />
      <button>
        <img src={Search} alt="search" />
      </button>
    </InputBox>
  );
};

export default Input;
