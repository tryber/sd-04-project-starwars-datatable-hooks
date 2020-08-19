import React from 'react';

export const renderHeader = (data) => {
  if (data) {
    const { residents, ...newData } = data;
    return Object.keys(newData).map((attr) => <th key={attr}>{attr}</th>);
  }
  return <p>NOTHING FOUND</p>;
};

export const renderTable = (data) => data.map((planet) => (
  <tr key={planet.name}>
    {Object.values(planet).map((attr) => (
      <td key={planet.name}>{attr}</td>
    ))}
  </tr>
));
