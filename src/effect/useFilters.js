import { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import orderFuncAsc from '../components/filters/OrderFuncAsc';
import orderFuncDesc from '../components/filters/OrderFuncDesc';
import usePlanets from '../effect/usePlanets';

const useFilters = () => {
  const data = usePlanets();

  const {
    filteredPlanets,
    setFilteredPlanets,
    setFilters,
    filters: {
      filterByName: { name },
      filterByNumericValues: NumericValues,
      order: { column, sort },
    },
  } = useContext(StarWarsContext);

  const filterByName = (name) =>
    setFilters((state) => ({
      ...state,
      filterByName: { name },
    }));

  useEffect(() => {
    const filtered =
      sort === 'ASC'
        ? orderFuncAsc(data, name, NumericValues, column)
        : orderFuncDesc(data, name, NumericValues, column);
    setFilteredPlanets(filtered);
  }, [name, NumericValues, column, sort]);

  const filterByNumericValues = (column, comparison, value) =>
    setFilters((state) => ({
      ...state,
      filterByNumericValues: [
        ...state.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    }));

  const orderColumns = (column, sort) =>
    setFilters((state) => ({
      ...state,
      order: { column, sort },
    }));

  const removeFilterNumeric = (obj) =>
    setFilters((state) => ({
      ...state,
      filterByNumericValues: [
        ...state.filterByNumericValues.filter((filter) => filter !== obj),
      ],
    }));

  return {
    filteredPlanets,
    removeFilterNumeric,
    orderColumns,
    filterByNumericValues,
    filterByName,
  };
};

export default useFilters;

// para adicionar
// TableBody.defaultProps = {
//   columnSort: 'Name',
//   sort: 'ASC',
// };

//   name: PropTypes.string.isRequired,
//   numericValues: PropTypes.arrayOf(
//     PropTypes.shape({
//       column: PropTypes.string,
//       comparison: PropTypes.string,
//       value: PropTypes.string,
//       columnSort: PropTypes.string,
//       sort: PropTypes.string,
//     }),
//   ).isRequired,
//   columnSort: PropTypes.string.isRequired,
//   sort: PropTypes.string.isRequired,
