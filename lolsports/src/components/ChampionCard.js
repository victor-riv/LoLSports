import React from "react";

const ChampionCard = ({ champion }) => {
  const { name, title } = champion;
  console.log(champion);
  return (
    <div>
      <img
        src={`http://ddragon.leagueoflegends.com/cdn/11.1.1/img/champion/${champion.image.full}`}
        alt={champion.id}
        height="82"
        width="82"
      />
      <p>{name}</p>
    </div>
  );
};

export { ChampionCard };
