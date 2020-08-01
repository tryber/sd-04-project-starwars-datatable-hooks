import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import FiltersPanel from './components/FiltersPanel';

class App extends React.Component {

  render() {
    return (
      <StarWarsProvider>
        <div>
          <header>
            <SearchBar />
            <Filter />
            <FiltersPanel />
          </header>
          <section>
            <Table />
          </section>
        </div>
      </StarWarsProvider>
    );
  }
}

export default App;
