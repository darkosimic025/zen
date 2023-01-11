import styled from 'styled-components';
import { LoaderProps } from './Loader';

export type LoaderContainerProps = Pick<LoaderProps, 'size'>;
export type LoaderSVGProps = Pick<LoaderProps, 'color'>;

export const LoaderContainer = styled.div<LoaderContainerProps>`
  position: relative;
  height: 25px;
  width: 25px;
`;
export const LoaderSVG = styled.svg<LoaderSVGProps>`
  animation: rotate 1s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50%;
  margin-left: -50%;
  stroke: currentColor;
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
