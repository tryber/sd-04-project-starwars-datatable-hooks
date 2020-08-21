export const api = () => {
  fetch('https://swapi.dev/api/planets/')
    .then((obj) => obj.json())
    .then((data) => data);
};

