import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { firebaseMatches } from "../../firebase";
import { firebaseLooper, reverseArray } from "../Utils/misc";
import LeagueTable from "./table";

class TheMatches extends Component {
  state = {
    isLoading: true,
    matches: [],
    filtereMatches: [],
    playerFilter: "All",
    resultFilter: "All"
  };

  componentDidMount() {
    firebaseMatches.once("value").then(snapshot => {
      const matches = firebaseLooper(snapshot);
      this.setState({
        isLoading: false,
        matches: reverseArray(matches),
        filtereMatches: reverseArray(snapshot)
      });
    });
  }
  render() {
    const state = this.state;
    return (
      <div className="the_matches_container">
        <div className="the_matches_wrapper">
          <div className="left">The matches right</div>
          <div className="right">
            <LeagueTable />
          </div>
        </div>
      </div>
    );
  }
}

export default TheMatches;
