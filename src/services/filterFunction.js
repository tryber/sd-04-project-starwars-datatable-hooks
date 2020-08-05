const filterComparisons = (filteredData, column, comparison, value) => {
  switch (comparison) {
    case 'maior que':
      return filteredData.filter((child) => Number(child[column]) > Number(value));
    case 'igual a':
      return filteredData.filter((child) => Number(child[column]) === Number(value));
    case 'menor que':
      return filteredData.filter((child) => Number(child[column]) < Number(value));
    default:
      return false;
  }
};

// quebrando a função COMPARE em partes
const comparePartTwo = (varA, varB, order) => {
  let comparison = 0;
  if (varA > varB) {
    comparison = 1;
  } else if (varA < varB) {
    comparison = -1;
  }
  return order === 'DESC' ? comparison * -1 : comparison;
};

// função pra ordernar números ou strings em ordem ASC ou DESC:
const compare = (type, order = 'ASC') => (a, b) => {
  // convertendos as vaáveis que deviam ser number mas são strings:
  const varA = Number(a[type]) ? Number(a[type]) : a[type];
  const varB = Number(b[type]) ? Number(b[type]) : b[type];
  // chamando a parte dois:
  return comparePartTwo(varA, varB, order);
};

// função principal do filter, que recebe todos os possíveis parametros de filtragem da app:
const filterFunction = (data, filterName, filterNumber, order) => {
  let filteredData = [...data];
  if (filterNumber.length !== 0) {
    filterNumber.forEach(({ column, comparison, value }) => {
      filteredData = filterComparisons(filteredData, column, comparison, value);
    });
  }
  if (filterName.name) filteredData = data.filter((obj) => obj.name.toLowerCase().includes(filterName.name));
  if (order) filteredData.sort(compare(order.column.toLowerCase(), order.sort));
  return filteredData;
};

export default filterFunction;
