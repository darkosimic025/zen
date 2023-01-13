import React, {
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useMemo,
} from 'react';
import { BreadcrumbContentStyled } from './Breadcrumbs.styled';

export interface BreadcrumbContentProps {
  link?: string;
  onClick?: () => void;
  text?: string;
  disabled?: boolean;
  lastIndex?: number;
  index?: number;
}

export const BreadcrumbContent: ForwardRefExoticComponent<
  BreadcrumbContentProps & RefAttributes<HTMLSpanElement>
> = forwardRef<HTMLSpanElement, BreadcrumbContentProps>(
  (props, ref: ForwardedRef<HTMLSpanElement>) => {
    const {
      link,
      onClick,
      text,
      disabled = false,
      lastIndex,
      index,
    } = props;

    const tabIndex = useMemo(() => (disabled ? -1 : 0), [disabled]);

    if (link) {
      return (
        <a href={link}>
          <BreadcrumbContentStyled
            index={index}
            lastIndex={lastIndex}
            ref={ref}
          >
            {text}
          </BreadcrumbContentStyled>
        </a>
      );
    }

    return (
      <span tabIndex={tabIndex}>
        <BreadcrumbContentStyled
          index={index}
          lastIndex={lastIndex}
          onClick={onClick}
          ref={ref}
        >
          {text}
        </BreadcrumbContentStyled>
      </span>
    );
  }
);
