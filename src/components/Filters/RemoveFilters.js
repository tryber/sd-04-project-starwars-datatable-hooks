import React, { Component } from 'react';
import Proptypes from 'prop-types';

const RemoveFilters = ({ removeFilter, numericValues }) => {
  const handleRemoveFilter = (item) => removeFilter(item);
  const { numericValues } = this.props;
  return numericValues.map((item) => (
    <div data-testid="filter" key={item.value}>
      <span>{`${item.column} ${item.comparison} ${item.value}`}</span>
      <button type="button" onClick={() => handleRemoveFilter(item)}>
        x
      </button>
    </div>
  ));
};

RemoveFilters.propTypes = {
  removeFilter: Proptypes.func.isRequired,
  numericValues: Proptypes.string.isRequired,
};

export default RemoveFilters;
