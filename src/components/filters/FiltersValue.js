import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import useFilters from '../../effect/useFilters';

function FilterValue() {
  const [number, setNumber] = useState('');
  const [column, setColumn] = useState('');
  const [comparation, setComparation] = useState('');

  const { filterByNumericValues } = useFilters();


  componentDidMount() {
    this.updateColumn();
  }

  onNumberChange(event) {
    this.setState({ number: event.target.value });
  }

  onSelectChange(event, chave) {
    const { value } = event.target;
    this.setState({ [chave]: value });
  }

  onClick() {
    const { number, column, comparation } = this.state;
    filterByNumericValues(column, comparation, number);
    this.setState({ number: '', column: '', comparation: '' });
  }

  getColumns() {
    const select = this.updateColumn();
    return (
      <select
        onChange={(event) => this.onSelectChange(event, 'column')}
        data-testid="column-filter"
        value={this.state.column}
      >
        {select.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  getComparation() {
    const comparation = ['', 'maior que', 'menor que', 'igual a'];
    return (
      <select
        onChange={(event) => this.onSelectChange(event, 'comparation')}
        data-testid="comparison-filter"
        value={this.state.comparation}
      >
        {comparation.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  updateColumn() {
    const { numericValues } = this.props;
    const columns = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const stateColumns = numericValues.map(({ column }) => column);
    return [
      '',
      ...columns.filter((option) => !stateColumns.includes(option)),
    ];
  }


  return (
    <div>
      {this.getColumns()}
      {this.getComparation()}
      <input
        type="number"
        data-testid="value-filter"
        value={this.state.number}
        onChange={(event) => this.onNumberChange(event)}
      />
      <button data-testid="button-filter" onClick={this.onClick}>
        Filtrar
      </button>
    </div>
  );
  
}

export default FilterValue;

// FilterValue.propTypes = {
//   numericValues: PropTypes.arrayOf(
//     PropTypes.shape({
//       column: PropTypes.string,
//       comparison: PropTypes.string,
//       value: PropTypes.string,
//     }),
//   ).isRequired,
//   filterByNumericValues: PropTypes.func.isRequired,
// };
