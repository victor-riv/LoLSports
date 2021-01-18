import React from "react";
import { RiotAPIProvider } from "./utilities/RiotAPIContext";
import { ChampionsPage } from "./pages/Champions";
import "./index.css";

const App = () => {
  return (
    <RiotAPIProvider>
      <ChampionsPage />
    </RiotAPIProvider>
  );
};

export default App;
