import React, { useContext } from 'react';
import Filters from './Filters';
import Table from './Table';
import StarWarsContext from '../context/StarWarsContext';

const Home = () => {
  const { loading, data } = useContext(StarWarsContext);

  if (loading) return <h1>Loading...</h1>;
  console.log(data);
  console.log(loading);
  return (
    <div>
      <h3>StarWars Datatable with Filters</h3>
      <Filters />
      <Table />
    </div>
  );
};

export default Home;

/* class Home extends Component {
  componentDidMount() {
    const { planetsFetch } = this.props;
    planetsFetch();
    console.log(planetsFetch());
  }

  render() {
    const { isFetching } = this.props;
    if (isFetching) return <h1>Loading...</h1>;
    return (
      <div>
        <h3>StarWars Datatable with Filters</h3>
        <Filters />
        <Table />
      </div>
    );
  }
}

Home.propTypes = {
  planetsFetch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isFetching: state.planets.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  planetsFetch: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home); */
