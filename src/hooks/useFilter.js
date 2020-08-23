// Testar usar hooks personalizado depois do evaluation
// PROXIMOS TESTE

// import { useContext } from 'react';
// import StarWarsContext from '../context/StarWarsContext';
// import FiltersContext from '../context/FiltersContext';

// const useFilters = () => {
//   const {
//     filters,
//     setFilters,
//     setFilterByName,
//     setFilterByNumber,
//     setCol,
//     deleteFilters,
//     setOrder,
//   } = useContext(FiltersContext);

//   const INITIAL_STATE = {
//       filterByName: {
//         name: '',
//       },
//       filterByNumericValues: [],
//       avaliableFilters: [
//         { name: 'population', avaliable: true },
//         { name: 'orbital_period', avaliable: true },
//         { name: 'diameter', avaliable: true },
//         { name: 'rotation_period', avaliable: true },
//         { name: 'surface_water', avaliable: true },
//       ],
//       order: {
//         column: 'Name',
//         sort: 'ASC',
//       },
//     };

// const FiltersProvider = ({ children }) => {
//   const [filters, setFilters] = useState(INITIAL_STATE);
// };

// export default useFilters;
