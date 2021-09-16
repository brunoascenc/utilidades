import React from 'react';
import Guitar from '../../assets/news/guitar.png';
import Mixer from '../../assets/news/mixer.png';
import { CustomButton } from '../custom-button/custom-button';
import { NewsContainer, NewsItem } from './styles';

const News = () => {
  return (
    <NewsContainer>
      <NewsItem
        style={{
          backgroundImage: `linear-gradient(to top,rgba(0, 0, 0, 0.8) ,transparent), url(${Mixer})`,
        }}
      >
        <p>Novidades</p>
        <h1>
          Áudio <span>profissional</span>
        </h1>
        <CustomButton whiteBtn>Confira</CustomButton>
      </NewsItem>
      <NewsItem
        style={{
          backgroundImage: `linear-gradient(to top,rgba(0, 0, 0, 0.8) ,transparent), url(${Guitar})`,
        }}
      >
        <p>Novidades</p>
        <h1>
          Instrumentos <span>musicais</span>
        </h1>
        <CustomButton whiteBtn>Confira</CustomButton>
      </NewsItem>
    </NewsContainer>
  );
};

export default News;
