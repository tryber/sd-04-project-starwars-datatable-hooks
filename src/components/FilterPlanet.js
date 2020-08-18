import React from 'react';
import useFilters from '../hooks/useFilters';


export default function FilterPlanet() {
  const { setFilterByName } = useFilters();

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="preencha"
        onChange={
          (event) => setFilterByName(event.target.value)
        }
      />
    </div>
  );
}


/*
FilterPlanet.propTypes = {
  filterByNames: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  filterByNames: (planetName) => dispatch(filterByName(planetName)),

});
*/

// export default connect(mapStateToProps, mapDispatchToProps)(FilterPlanet);
