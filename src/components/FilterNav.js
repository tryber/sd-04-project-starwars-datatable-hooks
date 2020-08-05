import React, { useContext, useState } from 'react';
import '../styles/App.css';
import Input from './utilityComponents/Input';
import Button from './utilityComponents/Button';
import Select from './utilityComponents/Select';
import ActiveFilters from './ActiveFilters';
import { StarWarsContext } from '../context/StarWarsContext';

const FilterNav = () => {
  const { planetsData, functions, filters } = useContext(StarWarsContext);
  const [localFilter, setLocalFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });
  const [localOder, setLocalOrder] = useState({
    column: 'Name',
    sort: 'ASC',
  });
  const onChangeFilter = (filterKey, inputValue) => setLocalFilter(
    { ...localFilter, [filterKey]: inputValue },
  );

  const onChangeOrder = (orderKey, inputValue) => setLocalOrder(
    { ...localOder, [orderKey]: inputValue },
  );

  const listOfAcitveColumns = filters.filterByNumericValues.map(
    (filterObj) => filterObj.column,
  );
  return (
    <nav>
      <label htmlFor="nameLabel">
        Name filter:
        <Input
          onChange={(e) => functions.setFilterByName(e.target.value)}
          test="name-filter"
        />
      </label>

      <div className="row">
        <label htmlFor="containerLabel">
          <label htmlFor="categoryLabel">
            Pick a Category:
            <Select
              onChange={(e) => onChangeFilter('column', e.target.value)}
              options={filters.categories.filter(
                (category) => !listOfAcitveColumns.includes(category),
              )}
              test="column-filter"
            />
          </label>
          <label htmlFor="comparisonLabel">
            Pick a comparison:
            <Select
              onChange={(e) => onChangeFilter('comparison', e.target.value)}
              options={['maior que', 'igual a', 'menor que']}
              test="comparison-filter"
            />
          </label>
          <label htmlFor="valueLabel">
            Value:
            <Input
              onChange={(e) => onChangeFilter('value', e.target.value)}
              type="number"
              test="value-filter"
            />
            <Button
              onClick={() => functions.setFilterByNumber(localFilter)}
              desc="FILTER!"
              disabled={
                !(
                  localFilter.column &&
                  localFilter.comparison &&
                  localFilter.value
                )
              }
              test="button-filter"
            />
          </label>
        </label>
        <label htmlFor="orderLabel">
          Order a Category:
          {planetsData.length > 0 && (
            <div>
              <Select
                onChange={(e) => onChangeOrder('column', e.target.value)}
                options={Object.keys(planetsData[0])}
                test="column-sort"
              />
              <label htmlFor="orderASC"> ASC:</label>
              <Input
                type="radio"
                name="order"
                id="orderASC"
                checked
                value="ASC"
                onChange={(e) => onChangeOrder('sort', e.target.value)}
                test="column-sort-input"
              />
              <label htmlFor="orderDESC"> DESC:</label>
              <Input
                type="radio"
                name="order"
                id="orderDESC"
                value="DESC"
                onChange={(e) => onChangeOrder('sort', e.target.value)}
                test="column-sort-input"
              />
              <Button
                onClick={() => functions.setFilterByOrder(localOder)}
                desc="SORT!"
                disabled={false}
                test="column-sort-button"
              />
            </div>
          )}
        </label>
      </div>
      <ActiveFilters />
      {/* <Button onClick={() => getAPIProps()} desc="FIND PLANETS!" /> */}
    </nav>
  );
};

export default FilterNav;
