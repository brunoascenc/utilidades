import styled from 'styled-components';

export const SliderContainer = styled.div`
  .swiper {
    width: 100vw;
  }
  .swiper-slide {
    height: 537px;
    display: flex;
    align-items: center;
    background-size: cover;
    background-position: center;
    width: 100%;
  }

  .swiper-pagination-bullet-active {
    background: ${(props) => props.theme.white};
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${(props) => props.theme.white};
    margin: -25px 25px 0 25px;
  }
`;

export const SlideContent = styled.div`
  width: 424px;
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 16px;
    letter-spacing: 3px;
    margin-bottom: 16px;
    font-weight: 300;
  }

  h1 {
    font-size: 50px;
    letter-spacing: 5px;
    font-weight: 900;
    line-height: 60px;

    span {
      font-size: 46px;
      font-weight: 300;
    }
  }

  button {
    cursor: pointer;
    position: relative;
    border: none;
    height: 45px;
    border: solid 1px transparent;
    background-color: transparent;
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 25px;
    padding: 12px;
    align-self: center;
    transition: 0.2s ease-in;
    width: 155px;
    height: 45px;
    border-radius: 5px;

    &::after {
      content: '';
      width: 85px;
      height: 1px;
      background: ${(props) => props.theme.white};
      position: absolute;
      bottom: -1px;
      left: 32px;
    }

    &:hover {
      border: solid 1px ${(props) => props.theme.white};
    }
  }
`;
