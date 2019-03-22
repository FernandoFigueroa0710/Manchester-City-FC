import React, { Component } from "react";
import Stripes from "../../../Resources/images/stripes.png";
import { Tag } from "../../Utils/misc";

class MeetPlayers extends Component {
  state = {};

  render() {
    return (
      <div
        className="home_meetplayers"
        style={{
          background: `#ffffff url(${Stripes})`
        }}
      >
        <div className="container">
          <div className="home_meetplayers_wrapper">
            <div className="home_card_wrapper">CARD Component</div>
            <div className="home_text_wrapper">TEXT COMPONENT</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MeetPlayers;
