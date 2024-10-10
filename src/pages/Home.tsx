import React from 'react';
import TableLayout, { TableInfo } from '../components/TableLayout';

const Home = () => {
  const tables: TableInfo[] = [
    { name: '기본홀01', gridRect: { x: 1, y: 1, width: 5, height: 3 } },
    { name: '기본홀02', gridRect: { x: 7, y: 5, width: 5, height: 3 } },
    { name: '기본홀03', gridRect: { x: 3, y: 6, width: 5, height: 3 } },
    { name: '기본홀04', gridRect: { x: 6, y: 9, width: 5, height: 3 } },
  ];

  return (
    <div>
      <h1>Top Bar Component</h1>
      <TableLayout tables={tables} />
    </div>
  );
};

export default Home;
