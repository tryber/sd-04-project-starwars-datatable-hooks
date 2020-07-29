import React, { useContext, useState } from 'react';
import { starContext } from '../../context';

const cols = ['name', 'rotation_period', 'orbital_period',
  'diameter', 'climate', 'gravity', 'terrain',
  'surface_water', 'population', 'films', 'created', 'edited', 'url'];

const OrderFilter = () => {
  const { setOrder } = useContext(starContext);

  const [orderState, setOrderState] = useState({
    column: 'name',
    sort: 'ASC',
  });

  const onChange = ({ target: { value, name } }) => {
    setOrderState({
      ...orderState,
      [name]: value,
    });
  };

  const onClick = () => {
    setOrder(orderState);
  };

  return (
    <div>
      Ordem:
      <select name="column" onChange={onChange} data-testid="column-sort">
        {cols.map((e) => <option key={e} value={e}>{e}</option>)}
      </select>
      <label htmlFor="asc">ASC</label>
      <input
        data-testid="column-sort-input-asc"
        type="radio"
        name="sort"
        id="asc"
        value="ASC"
        defaultChecked
        onClick={onChange}
      />
      <label htmlFor="dsc">DESC</label>
      <input
        data-testid="column-sort-input-desc"
        type="radio"
        name="sort"
        id="dsc"
        value="DESC"
        onClick={onChange}
      />
      <button data-testid="column-sort-button" type="button" onClick={onClick}>
        Filtrar
      </button>
    </div>
  );
};

export default OrderFilter;
