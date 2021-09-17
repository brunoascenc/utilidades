import styled from 'styled-components';

export const BrandsContainer = styled.section`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .swiper {
    width: 100%;
    margin-top: 100px;
    padding-left: 5%;
    padding-right: 5%;
  }
  h1 {
    color: ${(props) => props.theme.primaryColor};
    font-size: 25px;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  span {
    font-weight: 900;
  }

  p {
    color: ${(props) => props.theme.subTitleColor};
    font-size: 16px;
    margin-top: 15px;
  }

  .swiper-slide {
    position: relative;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${(props) => props.theme.primaryColor};
    margin: -25px 25px 0 25px;
    font-size: 10px;
  }
`;

export const Image = styled.img``;

export const ImageHover = styled.img`
  position: absolute;
  left: 0;
  opacity: 0;
  transition: 0.1s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;
