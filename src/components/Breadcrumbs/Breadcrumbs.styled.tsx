import styled from 'styled-components';
import { BreadcrumbContentProps } from './BreadcrumbContent';
import { BreadcrumbItemProps } from './BreadcrumbItem';
import { BreadcrumbContent } from './BreadcrumbContent';

export type BreadcrumbContentStyledProps = Pick<
  BreadcrumbContentProps,
  'index' | 'lastIndex'
>;

export const BreadcrumbContentStyled = styled.span<BreadcrumbContentStyledProps>`
  text-align: center;
  vertical-align: baseline;
  background-color: #6a99c0;
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
      background-color: #b2b2b9;
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

export const BreadcrumbItemStyled: any = styled.li`
  align-items: center;
  display: flex;
`;

export const BreadcrumbsStyled = styled.ol`
  list-style: none;
  display: flex;
`;
