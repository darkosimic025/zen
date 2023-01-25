import React, { Key, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

interface TableProps<T> {
  items: T[];
  columns: {
    key: string;
    label: string;
    render: (item: T) => ReactNode | ReactElement;
  }[];
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledThead = styled.thead`
  background-color: #f7f7f7;
`;

const StyledTbody = styled.tbody``;

const StyledTh = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const StyledTd = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const Table = <T extends object>({ items, columns }: TableProps<T>) => {
  return (
    <StyledTable>
      <StyledThead>
        <tr>
          {columns.map((column) => (
            <StyledTh key={column.key}>{column.label}</StyledTh>
          ))}
        </tr>
      </StyledThead>
      <StyledTbody>
        {items.map((item, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <StyledTd key={column.key}>{column.render(item)}</StyledTd>
            ))}
          </tr>
        ))}
      </StyledTbody>
    </StyledTable>
  );
};

export default Table;
