import React, { FC, useRef } from 'react';
import { BreadcrumbContent } from './BreadcrumbContent';
import { BreadcrumbItemStyled } from './Breadcrumbs.styled';

export type BreadcrumbItemProps = {
  link?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  text?: string;
  disabled?: boolean;
  index?: number;
  lastIndex?: number;
};

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
    link,
    onClick,
    lastIndex,
    index,
  } = props;

  const overrideDisabled = backwardCompatibilityForProperties(
    [disabled, isDisabled],
    false
  ) as boolean;
  const componentRef = useRef<HTMLSpanElement>(null);

  return (
    <BreadcrumbItemStyled >
      <BreadcrumbContent
        index={index as number}
        lastIndex={lastIndex }
        text={text}
        link={link}
        ref={componentRef}
        disabled={overrideDisabled}
        onClick={onClick}
      />
    </BreadcrumbItemStyled>
  );
};

export default BreadcrumbItem;
