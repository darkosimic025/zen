import React, {
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useMemo,
} from 'react';
import { BreadcrumbContentStyled } from './Breadcrumbs.styled';

export interface BreadcrumbContentProps {
  isClickable?: boolean;
  link?: string;
  onClick?: () => void;
  text?: string;
  isCurrent?: boolean;
  disabled?: boolean;
}

export const BreadcrumbContent: ForwardRefExoticComponent<
  BreadcrumbContentProps & RefAttributes<HTMLSpanElement>
> = forwardRef<HTMLSpanElement, BreadcrumbContentProps>(
  (props, ref: ForwardedRef<HTMLSpanElement>) => {
    const {
      isClickable,
      link,
      onClick,
      text,
      isCurrent,
      disabled = false,
    } = props;

    const tabIndex = useMemo(() => (disabled ? -1 : 0), [disabled]);

    if (link) {
      return (
        <a href={link}>
          <BreadcrumbContentStyled
            isCurrent={isCurrent}
            isClickable={isClickable}
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
          isCurrent={isCurrent}
          onClick={onClick}
          isClickable={isClickable}
          ref={ref}
        >
          {text}
        </BreadcrumbContentStyled>
      </span>
    );
  }
);
