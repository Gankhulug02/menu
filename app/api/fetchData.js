export const fetchData = async () => {
  const response = await fetch('https://dummyjson.com/test/?delay=5000');
  const data = await response.json();
  return data;
};
