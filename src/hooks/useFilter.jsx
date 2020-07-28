import { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const dynamicSort = (property, order) => {
  const sortOrder = order === 'ASC' ? 1 : -1;
  return function (a, b) {
    let result = 0;
    if (Number.isNaN(+a[property.toLowerCase()])) {
      if (a[property.toLowerCase()] < b[property.toLowerCase()]) {
        result = -1;
      } else if (a[property.toLowerCase()] > b[property.toLowerCase()]) {
        result = 1;
      }
    }

    if (!Number.isNaN(a[property.toLowerCase()])) {
      if (+a[property.toLowerCase()] < +b[property.toLowerCase()]) {
        result = -1;
      } else if (+a[property.toLowerCase()] > +b[property.toLowerCase()]) {
        result = 1;
      }
    }
    return result * sortOrder;
  };
};

const useFilter = (arr) => {
  const [store] = useContext(StarWarsContext);

  const filter = () => {
    let filtered = [];
    const filterName = store.filters.filterByName.name;
    const filterNumber = store.filters.filterByNumericValues;
    const filterOrder = store.filters.order;

    filtered =
      filterName === ''
        ? arr
        : arr.filter((item) => item.name.includes(filterName));

    if (filterNumber.length > 0) {
      filterNumber.forEach((filter) => {
        if (filter.comparison === 'maior que') {
          filtered = filtered.filter(
            (planet) => +planet[filter.column] > +filter.value,
          );
        }
        if (filter.comparison === 'menor que') {
          filtered = filtered.filter(
            (planet) => +planet[filter.column] < +filter.value,
          );
        }
        if (filter.comparison === 'igual a') {
          filtered = filtered.filter(
            (planet) => +planet[filter.column] === +filter.value,
          );
        }
      });
    }
    filtered.sort(dynamicSort(filterOrder.column, filterOrder.sort));

    return filtered;
  };

  return store.apiRequest.data ? filter() : null;
};

export default useFilter;
