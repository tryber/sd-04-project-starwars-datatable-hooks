import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const FilterList = () => {
  const [store, setStore] = useContext(StarWarsContext);

  const filters = store.filters.filterByNumericValues;

  const removeFilter = (filterIndex) => {
    setStore({
      ...store,
      filters: {
        ...store.filters,
        filterByNumericValues: store.filters.filterByNumericValues.filter(
          (item, index) => index !== filterIndex,
        ),
      },
    });
  };

  return (
    <div className="filter-list-container">
      <h3 className="caption">Filters list</h3>
      <div className="filter-items-container">
        {filters.map((item, index) => (
          <div key={item.column} data-testid="filter" className="filter-item">
            <p className="list-item-text">{`${item.column} ${item.comparison} ${item.value}`}</p>
            <button
              type="button"
              className="button"
              onClick={() => removeFilter(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterList;
