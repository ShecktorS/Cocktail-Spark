const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=f";

const GET = async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data;
};

export { GET };
