import styled from 'styled-components';
import { ButtonProps } from './Button';
export interface StyledButtonProps extends Omit<ButtonProps, 'children'> {}

const StyledButton = styled.button<StyledButtonProps>`
  width: ${({ size, theme }) => {
    switch (size) {
      case 's':
        return theme.button.buttonSizeWidth.s;
      case 'm':
        return theme.button.buttonSizeWidth.m;
      case 'l':
        return theme.button.buttonSizeWidth.l;
    }
  }};
  height: ${({ size, theme }) => {
    switch (size) {
      case 's':
        return theme.button.buttonSizeHeight.s;
      case 'm':
        return theme.button.buttonSizeHeight.m;
      case 'l':
        return theme.button.buttonSizeHeight.l;
    }
  }};
  color: ${({ theme }) => theme.pallete.white};
  background: ${({ color, theme }) => {
    switch (color) {
      case 'primary':
        return theme.button.buttonColors.primary;
      case 'success':
        return theme.button.buttonColors.success;
      case 'danger':
        return theme.button.buttonColors.danger;
      case 'warning':
        return theme.button.buttonColors.warning;
      case 'secondary':
        return theme.button.buttonColors.secondary;
    }
  }};
  &:hover {
    background: ${({ color, theme }) => {
      switch (color) {
        case 'primary':
          return theme.button.buttonColors.primaryHover;
        case 'success':
          return theme.button.buttonColors.successHover;
        case 'danger':
          return theme.button.buttonColors.dangerHover;
        case 'warning':
          return theme.button.buttonColors.warningHover;
        case 'secondary':
          return theme.button.buttonColors.secondaryHover;
      }
    }
  }
  };
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export default StyledButton;
