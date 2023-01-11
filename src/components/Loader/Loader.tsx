import React, { forwardRef } from 'react';
import { LoaderCircle, LoaderContainer, LoaderSVG } from './Loader.styled';

export type LoaderSize = 's' | 'm' | 'l';
export type LoaderColor =
  | 'primary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'secondary';

export interface LoaderProps {
  size?: LoaderSize;
  color?: LoaderColor;
}

const Loader = forwardRef(({ size, color }: LoaderProps) => {
  return (
    <LoaderContainer size={size}>
      <LoaderSVG viewBox="0 0 50 50" color={color}>
        <LoaderCircle cx="25" cy="25" r="20"></LoaderCircle>
      </LoaderSVG>
    </LoaderContainer>
  );
});

export default Loader;
