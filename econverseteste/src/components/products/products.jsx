import React, { useContext, useState } from 'react';
import { context } from '../../context/data-provides';
import { CustomButton } from '../custom-button/custom-button';
import {
  ProductsContainer,
  ProductsList,
  ListItem,
  DetailsButton,
  ProductImage,
} from './styles';
import Zoom from '../../assets/icons/zoom.png';
import Container from '../container/container';

const Products = () => {
  const value = useContext(context);
  const [products] = value.products;
  const [showMore, setShowMore] = useState(8);

  let fixedPrice = '';
  if (products) {
    products.filter((instrumento) => {
      const productPrice = instrumento.price.toString();
      const priceArray = productPrice.split('');

      const lastNumbers = priceArray.splice(productPrice.length - 2);
      priceArray.push(',');

      const fixedPriceArr = priceArray.concat(lastNumbers);

      return (fixedPrice = fixedPriceArr.join(''));
    });
  }

  return (
    <ProductsContainer>
      <h1>
        Instrumentos <span>destaque</span>
      </h1>
      <p>
        it is a long established fact that a reader will be distracted by the
        readable
      </p>
      <Container>
        <ProductsList>
          {products.slice(0, showMore).map((product) => {
            return (
              <ListItem key={product.productName}>
                <div>
                  <ProductImage src={product.photo} alt={product.productName} />
                  <div className="quick-view">
                    <DetailsButton>
                      <img src={Zoom} alt={product.productName} />
                    </DetailsButton>
                  </div>
                </div>
                <span>{product.productName}</span>
                <p>{product.descriptionShort}</p>
                <span className="price">R$ {fixedPrice}</span>
              </ListItem>
            );
          })}
        </ProductsList>
      </Container>
      <CustomButton onClick={() => setShowMore((prev) => prev + 4)}>
        Veja Mais
      </CustomButton>
    </ProductsContainer>
  );
};

export default Products;
