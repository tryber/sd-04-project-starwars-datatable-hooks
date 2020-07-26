export default function setFilterByName(string, planets, setData, data) {
  const filteredPlanets = planets.filter(({ name }) =>
    name.toLowerCase().includes(string.toLowerCase()),
  );
  setData({
    ...data,
    filteredPlanets,
    filterByName: { name: string },
  });
}
