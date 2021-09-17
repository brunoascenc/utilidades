import React from 'react';
import Brands from '../../components/brands/brands';
import Instruments from '../../components/instruments/instruments';
import MainContainer from '../../components/main-container/main-container';
import News from '../../components/news/news';
import Products from '../../components/products/products';
import Slider from '../../components/slider/slider';

const Home = () => {
  return (
    <MainContainer>
      <Slider />
      <Instruments />
      <News />
      <Products />
      <Brands />
    </MainContainer>
  );
};

export default Home;
