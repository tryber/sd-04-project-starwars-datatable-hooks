import React from 'react';
import planetHeaders from '../../services/data';

export const TableHeader = () => {
  return (
    <thead>
      <tr>
        {planetHeaders.map((header) => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    </thead>
  );
};
