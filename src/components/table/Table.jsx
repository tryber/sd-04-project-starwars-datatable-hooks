import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = () => (
  <table className="table table-dark table-bordered table-hover table-sm">
    <TableHeader />
    <TableBody />
  </table>
);

export default Table;
