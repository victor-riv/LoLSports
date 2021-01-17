const getChampions = async () => {
  const response = await fetch(
    "http://ddragon.leagueoflegends.com/cdn/11.1.1/data/en_US/champion.json"
  );
  return response.json();
};

export { getChampions };
