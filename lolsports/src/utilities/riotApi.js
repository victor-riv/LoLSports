const buildChampionsArray = (obj) => {
  const championsArray = [];

  for (const [key, value] of Object.entries(obj)) {
    championsArray.push(value);
  }

  return championsArray;
};

const getChampions = async () => {
  const response = await fetch(
    "http://ddragon.leagueoflegends.com/cdn/11.1.1/data/en_US/champion.json"
  );
  return response.json();
};

export { getChampions, buildChampionsArray };
