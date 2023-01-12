import React, {
  Children,
  cloneElement,
  FC,
  isValidElement,
  ReactElement,
} from 'react';
import { BreadcrumbItemProps } from './BreadcrumbItem';
import { BreadcrumbsStyled } from './Breadcrumbs.styled';

export enum BreadcrumbsType {
  NAVIGATION = 'navigation',
  INDICATION = 'indication',
}

export interface BreadcrumbsProps {
  type: 'navigaion' | 'indication';
  children:
    | ReactElement<BreadcrumbItemProps>
    | ReactElement<BreadcrumbItemProps>[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = (props) => {
  const { children, type = BreadcrumbsType.NAVIGATION } = props;
  return (
    <nav>
      <BreadcrumbsStyled>
        {children &&
          Children.map(children, (child, index) =>
            isValidElement(child)
              ? [
                  index > 0 && '>',
                  cloneElement(child, {
                    ...child?.props,
                    isClickable: type !== BreadcrumbsType.INDICATION,
                  }),
                ]
              : null
          )}
      </BreadcrumbsStyled>
    </nav>
  );
};

export default Breadcrumbs;
