import styled from 'styled-components';
import { WidthContainer } from '../container/styles';

export const HeaderContainer = styled.header`
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const SubHeaderContainer = styled.div`
  width: 100%;
  height: 38px;
  background-color: ${(props) => props.theme.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  ${WidthContainer} {
    display: flex;
    justify-content: space-between;
  }
`;

export const SubHeaderItem = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.white};
  font-weight: bold;
  border-right: solid 1px white;
  padding: 0 8% 0 8%;
  &:last-child {
    border-right: none;
    padding: 0 0 0 8%;
  }
  &:first-child {
    padding: 0 8% 0 0;
  }
  img {
    margin-right: 17px;
  }
`;

export const HeaderELements = styled.div`
  display: flex;
  align-items: center;
  height: 75px;
  justify-content: space-between;
`;

export const InputBox = styled.div`
  position: relative;
  input {
    height: 43px;
    width: 340px;
    border-radius: 4px;
    border: ${(props) => 'solid 1px' + props.theme.lightGrey};
    padding: 0 25px 0 25px;
    &::placeholder {
      color: ${(props) => props.theme.lightGrey};
      font-size: 9px;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }
  button {
    background: none;
    cursor: pointer;
    border: none;
    position: absolute;
    top: 13px;
    right: 15px;
  }
`;

export const Contato = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.primaryColor};
  span {
    font-weight: bold;
  }
  img {
    margin-right: 7px;
  }
`;

export const User = styled.div`
  display: flex;
  font-weight: bold;
  color: ${(props) => props.theme.primaryColor};
  a {
    color: ${(props) => props.theme.primaryColor};
    font-size: 7px;
  }
  img {
    margin-right: 8px;
  }

  .user {
    cursor: pointer;
    display: flex;
    align-items: center;
    img {
      margin-left: 5px;
    }
  }
`;

export const Cart = styled.div`
  position: relative;
  width: 85px;
  height: 104px;
`;

export const CartInfo = styled.div`
  position: absolute;
  top: 0;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 115px;
  letter-spacing: 0.09em;

  img {
    margin-top: 20px;
  }

  p {
    font-size: 7px;
    margin-top: 10px;
    margin-bottom: 7px;
  }
  span {
    text-transform: lowercase;
  }
`;

export const Nav = styled.nav`
  border-top: 1px solid rgba(120, 117, 117, 0.22);
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 83%;
    height: 40px;
    li {
      font-weight: bold;
      display: flex;
      align-items: center;
      position: relative;

      &::after {
        pointer-events: none;
        content: '';
        width: 100%;
        position: absolute;
        top: 24px;
        height: 2px;
        background: transparent;
        transition: 0.2s ease-in-out;
      }
      &:hover {
        &::after {
          background: ${(props) => props.theme.primaryColor};
        }
      }

      img {
        margin-left: 5px;
      }

      a {
        color: ${(props) => props.theme.primaryColor};
        letter-spacing: 1px;
      }
    }
  }
`;
