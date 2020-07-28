import React from 'react';
import { useStarWars } from '../../context/StarWarsContext';
import FormFilters from '../../components/FormFilters';
import Table from '../../components/Table';
import ListFilters from '../../components/ListFilters';

export default function Dashboard() {
  const {
    planetsData: { data },
  } = useStarWars();

  return data.length > 0 ? (
    <div>
      <FormFilters />
      <ListFilters />
      <Table />
    </div>
  ) : (
    <div>loading...</div>
  );
}
