import filterFunc from './FilterFunc';

const orderName = (array) => array.sort(function (a, b) {
  if (a.name < b.name) return 1;
  else if (a.name > b.name) return -1;
  return 0;
});

const orderFuncAsc = (planets, name, numericValues, columnSort) => {
  if (columnSort === 'Name') {
    const filter = filterFunc(planets, name, numericValues);
    return orderName(filter);
  }
  return filterFunc(planets, name, numericValues).sort(
    (a, b) => b[columnSort] - a[columnSort],
  );
};

export default orderFuncAsc;
