import React, { useEffect, useContext } from "react";
import { getChampions, buildChampionsArray } from "../utilities/riotApi";
import { store } from "../utilities/RiotAPIContext";
import { ChampionCard } from "../components/ChampionCard";

const ChampionsPage = () => {
  const { dispatch, state } = useContext(store);

  useEffect(() => {
    getChampions().then((res) => {
      dispatch({
        type: "FETCH_CHAMPIONS",
        champions: buildChampionsArray(res.data),
      });
    });
  }, []);

  return (
    <div>
      {state.champions &&
        state.champions.map((champ) => (
          <ChampionCard key={champ.name} champion={champ} />
        ))}
    </div>
  );
};

export { ChampionsPage };
