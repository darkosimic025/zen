import React, { forwardRef, ReactNode } from 'react';
import { useDefaultProps } from '../../utils/Helpers';
import Loader from '../Loader/Loader';
import StyledButton from './Button.styled';

export type ButtonSize = 's' | 'm' | 'l';
export type ButtonColor =
  | 'primary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'secondary'
  | 'disabled';

export interface ButtonProps {
  size?: ButtonSize;
  color?: ButtonColor;
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
}
const defaultProps: Partial<ButtonProps> = {
  size: 'm',
  color: 'primary',
  children: 'Button',
};



const buttonIsDisabled = ({
  disabled,
  color,
}: {
  disabled: boolean | undefined;
  color: ButtonColor | undefined;
}) => {
  return disabled ? 'disabled' : color;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, color, size, disabled, loading } = useDefaultProps(
    defaultProps,
    props
  );

  return (
    <StyledButton
      disabled={disabled}
      color={buttonIsDisabled({ disabled, color })}
      size={size}
    >
      {loading && <Loader size={size}/>}
      {children}
    </StyledButton>
  );
});

export default Button;
