// import { useContext, useEffect } from 'react';
// import { StarWarsContext } from '../context/StarWarsContext';

// const useFetch = (url) => {
//   const [store, setStore] = useContext(StarWarsContext);

//   useEffect(() => {
//     const request = async () => {
//       try {
//         setStore({ ...store, apiRequest: { loading: true } });
//         const response = await fetch(url);
//         const json = await response.json();
//         setStore({
//           ...store,
//           apiRequest: {
//             ...store.apiRequest,
//             loading: false,
//             headers: Object.keys(json.results[0]).filter(
//               (item) => item !== 'residents',
//             ),
//             data: json.results,
//             error: '',
//           },
//         });
//       } catch (error) {
//         setStore({
//           ...store,
//           apiRequest: {
//             ...store.apiRequest,
//             loading: false,
//             error: `Erro ao carregar a pagina - ${error}`,
//           },
//         });
//       }
//     };
//     if (store.apiRequest.data && store.apiRequest.data.length === 0) {
//       request();
//     }
//   }, [setStore, store, url]);

//   return store;
// };

// export default useFetch;
