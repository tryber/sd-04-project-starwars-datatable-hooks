import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';
import planetHeaders from '../../services/data';

// const createButon = () => {
//   return (
//     <button className="btn btn-dark" data-testid="column-sort-button" type="button">
//       Order
//     </button>
//   );
// };

const createRadio = (handleChange) => (
  <div>
    <label htmlFor="ASC">ASC</label>
    <input
      onChange={(e) => handleChange(e)}
      data-testid="column-sort-input-asc"
      value="ASC"
      name="sort"
      id="ASC"
      type="radio"
    />
    <label htmlFor="DESC">DESC</label>
    <input
      onChange={(e) => handleChange(e)}
      data-testid="column-sort-input-desc"
      value="DESC"
      name="sort"
      id="DESC"
      type="radio"
    />
  </div>
);

const FilterOrder = () => {
  const { changeOrder, filter } = useContext(StarWarsContext);

  const [sort, setSort] = useState('');
  const [column, setColumn] = useState('');
  console.log(filter.order);

  const handleChangeColumn = (e) => setColumn(e.target.value);
  const handleChangeSort = (e) => setSort(e.target.value);
  const handleSubmit = () => {
    changeOrder(column, sort);
  };
  console.log('coluna', column);

  return (
    <div>
      <h4>Filter by Order</h4>
      <select
        onChange={(e) => handleChangeColumn(e)}
        data-testid="column-sort"
        name="column"
        id="column"
      >
        <option value="">Choose the Column</option>
        {planetHeaders.map((header) => (
          <option key={header} name={header} value={header}>
            {header}
          </option>
        ))}
      </select>
      {createRadio(handleChangeSort)}
      <button
        onClick={() => handleSubmit()}
        className="btn btn-dark"
        data-testid="column-sort-button"
        type="button"
      >
        Order
      </button>
    </div>
  );
};

export default FilterOrder;
