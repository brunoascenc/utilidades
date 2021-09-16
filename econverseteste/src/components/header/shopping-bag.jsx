import React from 'react';
import Bag from '../../assets/icons/cart.png';
import { Cart, CartInfo } from './styles';

const ShoppingBag = () => {
  return (
    <Cart>
      <CartInfo>
        <img src={Bag} alt="cart" />
        <p>Seu carrinho</p>
        <span>0 item (s)</span>
      </CartInfo>
    </Cart>
  );
};

export default ShoppingBag;
