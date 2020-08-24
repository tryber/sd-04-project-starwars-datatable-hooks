import React, { useContext, useState } from 'react';
import starWarsContext from '../context/StarWarsContext';
import Button from './Button';
import Select from './Select';

function createInputDesc() {
  return (
    <div>
      <input
        data-testid="column-sort-input"
        id="DESC"
        value="DESC"
        name="sort"
        type="radio"
      />
      <label htmlFor="DESC">DESC</label>
    </div>
  );
}
function createInputAsc() {
  return (
    <div>
      <input
        data-testid="column-sort-input"
        id="ASC"
        value="ASC"
        name="sort"
        type="radio"
        defaultChecked
      />
      <label htmlFor="ASC">ASC</label>
    </div>
  );
}

function OrderValues() {
  const [stateOrder, setStateOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });

  const { setStateFilter, data } = useContext(starWarsContext);

  const onChange = (event) => {
    const { name, value } = event.target;
    setStateOrder({ ...stateOrder, [name]: value });
  };

  const onClick = () => {
    const { column, sort } = stateOrder;
    setStateFilter({ column, sort }, 'ORDERFILTER');
  };

  return (
    <div>
      <Select
        testid="column-sort"
        onChange={(event) => onChange(event)}
        name="column"
        value={stateOrder.column}
      >
        {Object.keys(data[0])}
      </Select>

      <div onChange={(event) => onChange(event)} name="sort">
        {createInputAsc()}
        {createInputDesc()}
      </div>
      <Button onClick={(event) => onClick(event)} testid="column-sort-button">
        {'Filtrar'}
      </Button>
    </div>
  );
}

export default OrderValues;
