import styled from '@emotion/styled';
import React, { useState } from 'react';

interface CoordinateInfo {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Props {
  name: string;
  coordinateInfo: CoordinateInfo;
}

const Table = ({ name, coordinateInfo }: Props) => {
  const [isFilled, setIsFilled] = useState<boolean>(false);

  return (
    <div
      style={{
        position: 'absolute',
        border: 'solid 1px red',
        backgroundColor: isFilled ? 'red' : 'white',
        left: coordinateInfo.x,
        top: coordinateInfo.y,
        width: coordinateInfo.width,
        height: coordinateInfo.height,
        userSelect: 'none',
      }}
    >
      <p
        style={{
          justifyContent: 'center',
          marginTop: 0,
          pointerEvents: 'none',
        }}
      >
        {name}
      </p>
      <div className="contents" />
    </div>
  );
};

export default Table;
