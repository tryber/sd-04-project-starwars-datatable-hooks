import React, { useContext } from 'react'; // importe useContext para consumir o context
import StarWarsContext from '../context/StarWarsContext'; // contextos
import Table from './Table';
import SearchBar from './SearchBar';

const Home = () => {
  const { isLoading } = useContext(StarWarsContext);
  if (isLoading) return <span>...Loading</span>;
  return (
    <div>
      <SearchBar />
      <Table />
    </div>
  );
};

export default Home;
