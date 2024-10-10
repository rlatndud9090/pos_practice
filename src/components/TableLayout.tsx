import React from 'react';
import styled from '@emotion/styled';
import Table from './Table';

const GRID_SIZE: number = 50;
const GridContainer = styled.div`
  position: relative;
  width: 1000px;
  height: 500px;
  background-size: ${GRID_SIZE}px ${GRID_SIZE}px;
  background-image: linear-gradient(to right, lightgray 1px, transparent 1px),
    linear-gradient(to bottom, lightgray 1px, transparent 1px);
`;
export interface GridRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface TableInfo {
  name: string;
  gridRect: GridRect;
}

interface Props {
  tables: TableInfo[];
}

const TableLayout = ({ tables }: Props) => {
  return (
    <GridContainer>
      {tables.map(table => {
        const coordinateInfo = {
          x: table.gridRect.x * GRID_SIZE,
          y: table.gridRect.y * GRID_SIZE,
          width: table.gridRect.width * GRID_SIZE,
          height: table.gridRect.height * GRID_SIZE,
        };
        return <Table name={table.name} coordinateInfo={coordinateInfo} key={table.name} />;
      })}
    </GridContainer>
  );
};

export default TableLayout;
