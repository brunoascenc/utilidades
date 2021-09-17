import React from 'react';
import Container from '../container/container';
import { SliderContainer, SlideContent } from './styles';
import Slide from '../../assets/slides/slide.png';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
SwiperCore.use([Pagination]);

const Slider = () => {
  return (
    <SliderContainer>
      <Swiper slidesPerView={1} pagination={true} navigation className="swiper">
        <SwiperSlide
          style={{
            backgroundImage: ` url(${Slide})`,
          }}
        >
          <Container>
            <SlideContent>
              <p>Novos produtos</p>
              <h1>
                Instrumentos <span>Profissionais</span>
              </h1>
              <button>Confira</button>
            </SlideContent>
          </Container>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: ` url(${Slide})`,
          }}
        >
          <Container>
            <SlideContent>
              <p>Novos produtos</p>
              <h1>
                Instrumentos <span>Profissionais</span>
              </h1>
              <button>Confira</button>
            </SlideContent>
          </Container>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: ` url(${Slide})`,
          }}
        >
          <Container>
            <SlideContent>
              <p>Novos produtos</p>
              <h1>
                Instrumentos <span>Profissionais</span>
              </h1>
              <button>Confira</button>
            </SlideContent>
          </Container>
        </SwiperSlide>
      </Swiper>
    </SliderContainer>
  );
};

export default Slider;
