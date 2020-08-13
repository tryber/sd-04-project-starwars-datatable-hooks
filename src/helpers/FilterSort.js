// Colunas numericas
const numericKeys = (filters) => {
  const numeric =[
    'rotation_period',
    'orbital_period',
    'diameter',
    'surface_water',
    'population',
  ];

  return numeric.includes(filters.order.column);
};

/*
    A função sort recebe dois parametros.
    Se retornar -1 indica que a vêm antes de b.
    Se retornar 1 indica que b vêm antes de a.
    Se retornar 0 são iguais, não faz nada.
    Referência: https://www.smashingmagazine.com/2020/03/sortable-tables-react/
    */

// Ordenando colunas
const orderTable = (filtered, filters) => {
  const coluna = numericKeys(filters);
  // Verifica se a coluna é numerica
  if (coluna) {
    if (filters.order.sort === 'ASC') {
      return filtered.sort(
        (a, b) =>
          Number(a[filters.order.column]) - Number(b[filters.order.column]),
      );
    }
    if (filters.order.sort === 'DESC') {
      return filtered.sort(
        (a, b) =>
          Number(b[filters.order.column]) - Number(a[filters.order.column]),
      );
    }
  }
  // Verifica colunas não numéricas
  if (!coluna) {
    filtered.sort((a, b) => {
      if (
        a[filters.order.column.toLowerCase()] <
        b[filters.order.column.toLowerCase()]
      ) {
        return -1;
      }

      if (
        a[filters.order.column.toLowerCase()] >
        b[filters.order.column.toLowerCase()]
      ) {
        return 1;
      }

      return 0;
    });
  }
  return filters.order.sort === 'DESC' ? filtered.reverse() : filtered;
};

export default orderTable;
