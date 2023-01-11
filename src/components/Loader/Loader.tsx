import React, { forwardRef } from 'react';
import { useDefaultProps } from '../../utils/Helpers';
import { LoaderCircle, LoaderContainer, LoaderSVG } from './Loader.styled';

export type LoaderSize = 's' | 'm' | 'l';
export type LoaderColor =
  | 'primary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'secondary'
  | 'currentColor';

export interface LoaderProps {
  size?: LoaderSize;
  color?: LoaderColor;
}

const defaultProps: Partial<LoaderProps> = {
  size: 'm',
  color: 'currentColor',
};

const Loader = forwardRef((props: LoaderProps, ref) => {
  const { color, size } = useDefaultProps(
    defaultProps,
    props
  );

  console.log(color)

  return (
    <LoaderContainer size={size}>
      <LoaderSVG viewBox="0 0 50 50" color={color}>
        <LoaderCircle cx="25" cy="25" r="20"></LoaderCircle>
      </LoaderSVG>
    </LoaderContainer>
  );
});

export default Loader;
