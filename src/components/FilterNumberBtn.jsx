import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StarWarsContext } from '../context/StarWarsContext';

const FilterNumberBtn = ({ state, clearColumnState }) => {
  const [store, setStore] = useContext(StarWarsContext);

  const filterByNumber = (filtersState) => {
    setStore({
      ...store,
      filters: {
        ...store.filters,
        filterByNumericValues: [
          ...store.filters.filterByNumericValues,
          filtersState,
        ],
      },
    });
  };

  return (
    <button
      type="button"
      data-testid="button-filter"
      className="button"
      onClick={() => {
        let stateObject = {};
        if (state.column && state.comparison && state.value) {
          stateObject = filterByNumber(state);
          clearColumnState();
        }
        return stateObject;
      }}
    >
      Filter
    </button>
  );
};

FilterNumberBtn.propTypes = {
  state: PropTypes.objectOf(PropTypes.string).isRequired,
  clearColumnState: PropTypes.func.isRequired,
};

export default FilterNumberBtn;
