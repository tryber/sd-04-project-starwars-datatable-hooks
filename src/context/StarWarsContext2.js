// import React, { createContext, useState } from 'react';

// export const StarWarsContext2 = createContext();

// const initialState = {
//   apiRequest: {
//     loading: true,
//     error: '',
//     headers: [],
//     data: [],
//   },
//   filters: {
//     filterByName: { name: '' },
//     filterByNumericValues: [],
//     order: { column: 'Name', sort: 'ASC' },
//   },
// };

// export const Store = ({ children }) => {
//   const [store, setStore] = useState(initialState);

//   return (
//     <StarWarsContext2.Provider value={[store, setStore]}>
//       {children}
//     </StarWarsContext2.Provider>
//   );
// };
