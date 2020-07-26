import React from 'react';

export default function RenderTable({ tableHeaderTitles, planets }) {
  return (
    <table>
      <thead>
        <tr>
          {tableHeaderTitles
            .filter((title) => title !== 'residents')
            .map((title) => (
              <th key={title}>{title}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet) => (
          <tr key={planet.name}>
            {Object.values(planet)
              .filter((_, index) => index !== 9)
              .map((value) => (
                <td key={value}>{value}</td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
