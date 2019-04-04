import React, { Component } from "react";
import PlayerCard from "../Utils/PlayerCard";
import Fade from "react-reveal/Fade";

import Stripes from "../../Resources/images/stripes.png";
import { firebasePlayers, firebase } from "../../firebase";
import { firebaseLooper } from "../Utils/misc";
import { Promise } from "core-js";

class TheTeam extends Component {
  state = {
    loading: true,
    players: []
  };

  componentDidMount() {
    firebasePlayers.once("value").then(snapshot => {
      const players = firebaseLooper(snapshot);
      let promises = [];
      for (let key in players) {
        promises.push(
          new Promise((resolve, reject) => {
            firebase
              .storage()
              .ref("players")
              .child(players[key].image)
              .getDownloadURL()
              .then(url => {
                players[key].url = url;
                resolve();
              });
          })
        );
      }
      Promise.all(promises).then(() => {
        this.setState({
          loading: false,
          players
        });
      });
    });
  }
  render() {
    return (
      <div>
        <div>The Team</div>
      </div>
    );
  }
}

export default TheTeam;
