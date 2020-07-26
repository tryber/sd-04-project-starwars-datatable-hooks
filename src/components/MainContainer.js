import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from './Table';
import { fetchPlanet } from '../actions/planetActions';
import SearchBar from './SearchBar';
import Filter from './Filter';
import './MainContainer.css';
import { StarWarsContext } from '../context/StarWarsContext';
import testData from '../testData';

const MainContainer = () => {
  const { searchInput } = useContext(StarWarsContext);

  // filter the complete planet list from API according to active filters
  const planetFilter = () => {
    // const { data, filters, searchedPlanet } = this.props;

    // const filterArray = filters.filterByNumericValues;
    let filteredPlanet = testData.results.filter((planet) =>
      planet.name.includes(searchInput),
    );
    // filterArray.map((filter) => {
    //   filteredPlanet = filteredPlanet.filter((planet) =>
    //     this.compare(
    //       Number(planet[filter.column]),
    //       Number(filter.value),
    //       filter.comparison,
    //     ),
    //   );
    //   return filteredPlanet;
    // });
    return filteredPlanet;
    console.log("filteredPlanet", filteredPlanet);
  };

  // const { data, isLoading } = this.props;
  const isLoading = true;
  const test = planetFilter(); // => Use UseEffect
  return (
    <div>
      {/* <div className="filterEmbender"> */}
      <div className="filterContainer">
        <div className="searchbar">
          <SearchBar />
        </div>
        <div>
          <Filter />
        </div>
      </div>

      {/* {!isLoading && ( // When API is not done Table is not rendered */}
      {isLoading && ( // When API is not done Table is not rendered
        // <Table planets={testData.results} filteredPlanet={this.planetFilter()} />
        <Table planets={testData.results} filteredPlanet={test} />
      )}
    </div>
  );
};
export default MainContainer;
// }

// const mapStateToProps = (state) => ({
//   isLoading: state.planetReducer.isLoading,
//   data: state.planetReducer.data,
//   searchedPlanet: state.filters.filterByName.name,
//   filters: state.filters,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getPlanet: () => dispatch(fetchPlanet()),
// });

// MainContainer.propTypes = {
//   getPlanet: PropTypes.func.isRequired,
//   data: PropTypes.arrayOf(PropTypes.object),
//   searchedPlanet: PropTypes.string,
//   isLoading: PropTypes.bool.isRequired,
//   filters: PropTypes.shape(),
// };

// MainContainer.defaultProps = {
//   data: [],
//   filters: null,
//   searchedPlanet: null,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
