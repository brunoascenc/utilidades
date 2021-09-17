import React from 'react';
import Akg from '../../assets/brands/akg.png';
import AkgHover from '../../assets/brands/akg-hover.png';
import Roland from '../../assets/brands/roland.png';
import RolandHover from '../../assets/brands/roland-hover.png';
import Boss from '../../assets/brands/boss.png';
import BossHover from '../../assets/brands/boss-hover.png';
import Shure from '../../assets/brands/shure.png';
import ShureHover from '../../assets/brands/shure-hover.png';
import { BrandsContainer, Image, ImageHover } from './styles';
import Container from '../container/container';
// import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

const Brands = () => {
  return (
    <BrandsContainer>
      <h1>
        As <span>melhores</span> marcas
      </h1>
      <p>
        it is a long established fact that a reader will be distracted by the
        readable
      </p>

      <Swiper slidesPerView={4} navigation className="swiper">
        <SwiperSlide className="swiper-slide">
          <Image src={Akg} alt="akg" />
          <ImageHover src={AkgHover} alt="akg" />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <Image src={Roland} alt="Rolland" />
          <ImageHover src={RolandHover} alt="Rolland" />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <Image src={Boss} alt="Boss" />
          <ImageHover src={BossHover} alt="Boss" />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <Image src={Shure} alt="Shure" />
          <ImageHover src={ShureHover} alt="Shure" />
        </SwiperSlide>
      </Swiper>
    </BrandsContainer>
  );
};

export default Brands;
