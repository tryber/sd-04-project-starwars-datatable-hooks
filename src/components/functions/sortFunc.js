const numericColumns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const orderAscNumericValues = (planets, column) => planets
  .sort((a, b) => Number(a[column]) - Number(b[column]));

const orderAscStringValues = (planets, column) => planets.sort((a, b) => {
  if (a[column] < b[column]) return -1;
  if (a[column] > b[column]) return 1;
  return 0;
});

const sortFunc = (planets, column, order) => {
  const lowerCaseColumn = column.toLowerCase();
  const sortedData = numericColumns.includes(lowerCaseColumn)
    ? orderAscNumericValues(planets, lowerCaseColumn)
    : orderAscStringValues(planets, lowerCaseColumn);
  if (order === 'DESC') return sortedData.reverse();
  return sortedData;
};

export default sortFunc;
