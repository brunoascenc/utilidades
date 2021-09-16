import styled from 'styled-components';

export const NewsContainer = styled.section`
  height: 386px;
  width: 100%;
  display: flex;
  margin-top: 10px;
`;

export const NewsItem = styled.div`
  width: 50%;
  background-size: cover;
  background-position: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${(props) => props.theme.white};

  h1 {
    width: 320px;
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 15px;
  }

  span {
    font-weight: 300;
  }

  p {
    font-weight: 300;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 3px;
    margin-bottom: 30px;
    position: relative;

    &::after {
      content: '';
      width: 19px;
      height: 2px;
      background: ${(props) => props.theme.white};
      position: absolute;
      bottom: -10px;
      left: 42px;
    }
  }
`;
