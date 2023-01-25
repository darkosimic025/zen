import styled from 'styled-components';
import { BreadcrumbContentProps } from './BreadcrumbContent';

export type BreadcrumbContentStyledProps = Pick<
  BreadcrumbContentProps,
  'index' | 'lastIndex'
>;

export const BreadcrumbContentStyled = styled.span<BreadcrumbContentStyledProps>`
  text-align: center;
  vertical-align: baseline;
  background-color: #4ca1e797;
  border-radius: 3px;
  text-align: center;
  padding: 8px 15px 8px 15px;
  color: white;
  cursor: pointer;
  ${({ lastIndex, index }) => {
    return (
      lastIndex &&
      lastIndex - 1 == index &&
      `
      background-color: #5f5f687a;
      cursor : default;
      {clip-path: polygon(
          0 0,
          100% 0,
          100% 100%,
          0 100%,
          10px 50%
        );}`
    );
  }};
  ${({ index }) => {
    return (
      index === 0 &&
      ` {clip-path: polygon(
          0 0,
          calc(100% - 10px) 0,
          100% 50%,
          calc(100% - 10px) 100%,
          0 100%
        );}`
    );
  }};
  clip-path: polygon(
    0 0,
    calc(100% - 10px) 0,
    100% 50%,
    calc(100% - 10px) 100%,
    0 100%,
    10px 50%
  );
  line-height: 16px;
`;

export const BreadcrumbItemStyled = styled.li`
  align-items: center;
  display: flex;
  transition: 0.4s ease-in;
  &:hover {
    transform: translate(2px);
    
  }
`;

export const BreadcrumbsStyled = styled.ol`
  list-style: none;
  display: flex;
`;
