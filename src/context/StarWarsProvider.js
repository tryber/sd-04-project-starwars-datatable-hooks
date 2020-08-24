  import StarWarsContext from './StarWarsContext';
  
  const StarWarsProvider = ({ children }) => {  const [data, setPlanet] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [filter, setFilter] = useState(generalFilter);

  const setFetching = () => {
    setIsFetching();
  };

  const changeFilterName = (name) => {
    setFilter({ ...filter, filterByName: { name } });
  };

  const changeFilterColumn = (column, comparison, value) => {
    setFilter({
      ...filter,
     filterByNumericValues: [...filter.filterByNumericValues, { column, comparison, value}],
    });
  };

  const changeOrder = (column, sort) => {
    setFilter({
      ...filter,
      order: { column, sort },
    });
  };

  const removeFilter = (key) => {
    setFilter({
      ...filter,
      filterByNumericValues: filter.filterByNumericValues.filter((filtro) => filtro.column !== key),
    });
  };

  const contextValue = {
    data,
    isFetching,    
    filter,
    setPlanet,
    setFetching,
    changeFilterName,
    changeFilterColumn,
    removeFilter,
    changeOrder,
  };

  return <StarWarsContext.Provider value={contextValue}>{children}
</StarWarsContext.Provider>;
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default { StarWarsProvider, StarWarsContext };
