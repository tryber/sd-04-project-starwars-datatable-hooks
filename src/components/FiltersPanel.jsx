import React from 'react';
import FilterSearch from './FilterSearch';
// import FilterList from './FilterList';
// import FilterOrder from './FilterOrder';
// import FilterNumbers from './FilterNumbers';
import './FiltersPanel.css';

const FiltersPanel = () => {
  return (
    <div className="filters-panel-container">
      <h2 className="filter-panel-title">Filters</h2>
      <form>
        <FilterSearch />
        {/* <FilterNumbers />
          <FilterOrder /> */}
      </form>
      {/* <FilterList /> */}
    </div>
  );
};

export default FiltersPanel;
