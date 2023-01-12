import styled from 'styled-components';
import { BreadcrumbContentProps } from './BreadcrumbContent';

export type BreadcrumbContentStyledProps = Pick<
  BreadcrumbContentProps,
  'isClickable' | 'isCurrent'
>;

export const BreadcrumbContentStyled = styled.span<BreadcrumbContentStyledProps>`
  font-weight: ${({ isClickable, isCurrent }) => {
    return isCurrent ? '600' : '100';
  }};
  cursor: pointer;
`;

export const BreadcrumbItemStyled = styled.li`
  display: inline-flex;
  overflow: hidden;
  list-style-type: none;
`;

export const BreadcrumbsStyled = styled.ol`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
`;
