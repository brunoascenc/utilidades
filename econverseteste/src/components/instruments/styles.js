import styled from 'styled-components';

export const InstrumentsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 200px;
  align-items: center;
`;

export const Item = styled(InstrumentsContainer)`
  height: unset;
  flex-direction: column;
  opacity: 50%;
  transition: 0.2s ease-in-out;
  img {
    border: solid 1px transparent;
    border-radius: 50%;
    padding: 8px;
    transition: 0.2s ease-in-out;
  }
  p {
    margin-top: 15px;
    font-size: 14px;
    font-weight: 700;
    color: ${(props) => props.theme.primaryColor};
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  &:hover {
    opacity: 1;
    img {
      border: ${(props) => 'solid 1px' + props.theme.primaryColor};
    }
  }
`;
