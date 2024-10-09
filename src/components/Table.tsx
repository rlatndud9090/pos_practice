import React from 'react';

interface TableProps {
  coordinateInfo: CoordinateInfo;
}

interface CoordinateInfo {
  x: number;
  y: number;
  width: number;
  height: number;
}

const Table = (props: TableProps) => {
  return (
    <div>
      <p className="title">Title</p>
      <div className="contents"></div>
    </div>
  );
};

export default Table;
