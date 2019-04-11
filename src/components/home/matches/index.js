import React from "react";
import { Tag } from "../../Utils/misc";
import Blocks from "../matches/Blocks";

const MatchesHome = () => {
  return (
    <div className="home_matches_wrapper">
      <div className="container">
        <Tag bck="#0e1731" size="50px" color="#ffffff">
          Matches
        </Tag>
        <Blocks />
        <Tag
          bck="#ffffff"
          size="22px"
          color="#0e1731"
          link={true}
          linkto="/the_matches"
        >
          See More Matches
        </Tag>
      </div>
    </div>
  );
};

export default MatchesHome;
