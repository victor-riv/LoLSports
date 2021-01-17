import React from "react";

const ChampionCard = ({ champion }) => {
  const { name, title } = champion;
  return (
    <div>
      <p>{name}</p>
      <br />
      <p>{title}</p>
    </div>
  );
};

export { ChampionCard };
