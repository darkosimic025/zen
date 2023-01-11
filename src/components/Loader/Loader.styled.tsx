import styled from 'styled-components';
import { LoaderProps } from './Loader';

export type LoaderContainerProps = Pick<LoaderProps, 'size'>;
export type LoaderSVGProps = Pick<LoaderProps, 'color'>;

export const LoaderContainer = styled.div<LoaderContainerProps>`
  position: relative;
  height: 20px;
  width: 20px;
  width: ${({ size, theme }) => {
    switch (size) {
      case 's':
        return theme.loader.loaderSizeWidth.s;
      case 'm':
        return theme.loader.loaderSizeWidth.m;
      case 'l':
        return theme.loader.loaderSizeWidth.l;
    }
  }};
  height: ${({ size, theme }) => {
    switch (size) {
      case 's':
        return theme.loader.loaderSizeHeight.s;
      case 'm':
        return theme.loader.loaderSizeHeight.m;
      case 'l':
        return theme.loader.loaderSizeHeight.l;
    }
  }};
`;
export const LoaderSVG = styled.svg<LoaderSVGProps>`
  animation: rotate 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
  stroke: ${({ color, theme }) => {
    switch (color) {
      case 'primary':
        return theme.loader.loaderColors.primary;
      case 'success':
        return theme.loader.loaderColors.success;
      case 'danger':
        return theme.loader.loaderColors.danger;
      case 'warning':
        return theme.loader.loaderColors.warning;
      case 'secondary':
        return theme.loader.loaderColors.secondary;
      case 'currentColor':
        return 'currentColor';
    }
  }};
  stroke-linecap: round;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoaderCircle = styled.circle`
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
  animation: dash 1s infinite;
  stroke-width: 7;
  fill: none;
`;
