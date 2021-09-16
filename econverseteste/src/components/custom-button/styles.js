import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  width: 155px;
  height: 50px;
  border-radius: 4px;
  color: ${(props) =>
    props.whiteBtn ? props.theme.white : props.theme.primaryColor};
  border: ${(props) =>
    props.whiteBtn
      ? 'solid 1px' + props.theme.white
      : 'solid 1px' + props.theme.primaryColor};
  background: none;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${(props) =>
      props.whiteBtn ? props.theme.black : props.theme.white};
    background: ${(props) =>
      props.whiteBtn ? props.theme.white : props.theme.primaryColor};
  }
`;
