import React, { useState, useContext } from 'react';
import InputNumber from './InputNumber';
import Button from './Button';
import Select from './Select';
import starWarsContext from '../context/StarWarsContext';

const StateLocal = {
  column: '',
  comparison: '',
  value: '',
};

const arrayColumn = [
  '',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const arrayComparation = ['', 'maior que', 'menor que', 'igual a'];

const FilterValues = () => {
  const [stateLocal, setStateLocal] = useState(StateLocal);
  const { setStateFilter, getFilterNumericValues } = useContext(starWarsContext);

  const onChange = (event) => {
    const { value, name } = event.target;
    setStateLocal({ ...stateLocal, [name]: value });
  };

  const onClick = () => {
    const { column, comparison, value } = stateLocal;
    setStateFilter({ column, comparison, value }, 'NUMERICVALUES');
    setStateLocal({ column: '', comparison: '', value: '' });
  };

  const updatesColumns = () => {
    const invisibleColumns = getFilterNumericValues().map(({ column }) => column);
    return arrayColumn.filter((item) => !invisibleColumns.includes(item));
  };

  return (
    <div>
      <Select
        testid="column-filter"
        value={stateLocal.column}
        onChange={onChange}
        name="column"
      >
        {updatesColumns()}
      </Select>
      <Select
        testid="comparison-filter"
        value={stateLocal.comparison}
        onChange={onChange}
        name="comparison"
      >
        {arrayComparation}
      </Select>
      <InputNumber
        testid="value-filter"
        value={stateLocal.value}
        onChange={onChange}
        name="value"
        placeholder="Digite a quantidade"
      />
      <Button testid="button-filter" onClick={onClick}>
        {'Filtrar'}
      </Button>
    </div>
  );
};

export default FilterValues;
