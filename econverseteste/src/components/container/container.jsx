import React from 'react';
import { WidthContainer } from './styles';

const Container = (props) => {
  return <WidthContainer>{props.children}</WidthContainer>;
};

export default Container;
