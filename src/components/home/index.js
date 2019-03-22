import React from "react";
import Featured from "./featured";
import Matches from "./matches";
import MeetPlayers from "./meet_players/";

const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <Matches />
      <MeetPlayers />
    </div>
  );
};

export default Home;
