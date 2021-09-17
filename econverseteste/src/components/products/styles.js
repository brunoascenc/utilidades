import styled from 'styled-components';

export const ProductsContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 85px;
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
    font-size: 16px;
    margin-top: 15px;
    letter-spacing: 1px;
    color: #222222;
  }
`;

export const ProductImage = styled.img`
  position: relative;
  top: 0;
  transition: 0.2s ease-in-out;
`;
export const ProductsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  grid-row-gap: 60px;
  margin-top: 75px;
  margin-bottom: 50px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 34px 22px;
  border-radius: 4px;

  span {
    color: ${(props) => props.theme.primaryColor};
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-top: 10px;
  }

  p {
    font-size: 10px;
    color: ${(props) => props.theme.secondaryColor};
    text-align: center;
  }
  .price {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;
  }

  div {
    position: relative;
    .quick-view {
      position: absolute;
      background: linear-gradient(to top, #ffffff 15%, transparent);
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      opacity: 0;
      transition: 0.2s ease-in-out;
    }
  }

  &:hover {
    box-shadow: 8px 8px 10px 0px rgba(0, 0, 0, 0.1);
    .quick-view {
      opacity: 1;
    }
    ${ProductImage} {
      top: -25px;
    }
  }
`;

export const DetailsButton = styled.button`
  cursor: pointer;
  background: ${(props) => props.theme.primaryColor};
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 25px;

  &::after {
    content: 'Quick view';
    color: ${(props) => props.theme.primaryColor};
    position: absolute;
    width: 100px;
    font-size: 11px;
    letter-spacing: 2px;
    bottom: -17px;
    pointer-events: none;
  }
`;
