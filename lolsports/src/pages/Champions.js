import React, { useEffect, useState } from "react";
import { getChampions } from "../utilities/riotApi";
import { ChampionCard } from "../components/ChampionCard";

const ChampionsPage = () => {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    getChampions().then((res) => buildChampionsArray(res.data));
  }, [champions]);

  const buildChampionsArray = (obj) => {
    const championsArray = [];
    for (const [key, value] of Object.entries(obj)) {
      championsArray.push(value);
    }
    setChampions(championsArray);
  };

  return (
    <div>
      {champions &&
        champions.map((champ) => (
          <ChampionCard key={champ.name} champion={champ} />
        ))}
    </div>
  );
};

export { ChampionsPage };
