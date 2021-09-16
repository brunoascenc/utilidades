import React from 'react';
import { Button } from './styles';

export const CustomButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};
