import React, { forwardRef, ReactNode } from 'react';
import StyledButton from './Button.styled';

export type ButtonSize = 's' | 'm' | 'l';
export type ButtonColor = 'primary' | 'success' | 'danger' | 'warning' | 'secondary';

export interface ButtonProps {
  size?: ButtonSize;
  color?: ButtonColor;
  children?: ReactNode;
}
const defaultProps: Partial<ButtonProps> = {
  size: 'm',
  color: 'primary',
  children: 'Button',
};

const useDefaultProps = <T, U extends Partial<T> = {}>(
  defaultProps: U,
  props: T
) => {
  return { ...defaultProps, ...props };
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, color, size } = useDefaultProps(defaultProps, props);

  return (
    <StyledButton color={color} size={size}>
      {children}
    </StyledButton>
  );
});

export default Button;
