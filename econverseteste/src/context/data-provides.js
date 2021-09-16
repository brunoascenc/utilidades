import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const context = createContext();

const CORS = 'https://afternoon-lowlands-23813.herokuapp.com/';

export const ContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${CORS}http://econverse.digital/teste-front-end/junior/ninja-som/lista-produtos/produtos.json`
      )
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const value = {
    products: [products],
  };

  return <context.Provider value={value}>{props.children}</context.Provider>;
};
