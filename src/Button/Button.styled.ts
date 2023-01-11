import styled from 'styled-components';
import { ButtonProps } from './Button';

export interface StyledButtonProps extends Omit<ButtonProps, 'children'> {}



const StyledButton = styled.button<StyledButtonProps>`
  color: ${({ color }) => {
    switch (color) {
      case 'primary':
        return '#FFFFFF';
      case 'success':
        return '#FFFFFF';
      case 'danger':
        return '#FFFFFF';
    }
  }};
  background: ${({ color }) => {
    switch (color) {
      case 'primary':
        return '#adc3dc';
      case 'success':
        return '#9df9ef';
      case 'danger':
        return '#ffa8B6';
    }
  }};
`;

export default StyledButton;
