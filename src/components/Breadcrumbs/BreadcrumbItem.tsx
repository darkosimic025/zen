import React, { FC, useRef } from 'react';
import { BreadcrumbContent } from './BreadcrumbContent';
import { BreadcrumbItemStyled } from './Breadcrumbs.styled';

export interface BreadcrumbItemProps {
  isClickable?: boolean;
  link?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  text?: string;
  isCurrent?: boolean;
  disabled?: boolean;
}

export function backwardCompatibilityForProperties<T>(
  valuesArrayByMostUpdateNaming: Array<T> = [],
  defaultValue?: T
) {
  const value = valuesArrayByMostUpdateNaming.find(
    (currentValue) => currentValue !== undefined
  );
  return value || defaultValue;
}

const BreadcrumbItem: FC<BreadcrumbItemProps> = (props) => {
  const {
    text = '',
    disabled,
    isDisabled,
    isClickable,
    link,
    onClick,
    isCurrent = false,
  } = props;

  const overrideDisabled = backwardCompatibilityForProperties(
    [disabled, isDisabled],
    false
  ) as boolean;
  const componentRef = useRef<HTMLSpanElement>(null);

  return (
    <BreadcrumbItemStyled>
      <BreadcrumbContent
        text={text}
        link={link}
        isClickable={isClickable}
        ref={componentRef}
        isCurrent={isCurrent}
        disabled={overrideDisabled}
        onClick={onClick}
      />
    </BreadcrumbItemStyled>
  );
};

export default BreadcrumbItem;
