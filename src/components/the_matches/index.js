import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { firebaseMatches } from "../../firebase";
import { firebaseLooper, reverseArray } from "../Utils/misc";
import LeagueTable from "./table";
import MatchesList from "./matches_list";

class TheMatches extends Component {
  state = {
    isLoading: true,
    matches: [],
    filteredMatches: [],
    playerFilter: "All",
    resultFilter: "All"
  };

  componentDidMount() {
    firebaseMatches.once("value").then(snapshot => {
      const matches = firebaseLooper(snapshot);
      this.setState({
        isLoading: false,
        matches: reverseArray(matches),
        filteredMatches: reverseArray(matches)
      });
    });
  }
  showPlayed = played => {
    const list = this.state.matches.filter(match => {
      return match.final === played;
    });
    this.setState({
      filteredMatches: played === "All" ? this.state.matches : list,
      playerFilter: played,
      resultFilter: "All"
    });
  };

  render() {
    return (
      <div className="the_matches_container">
        <div className="the_matches_wrapper">
          <div className="left">
            <div className="match_filters">
              <div className="match_filters_box">
                <div className="tag">Show Match</div>
                <div className="cont">
                  <div
                    className={`option`}
                    onClick={() => this.showPlayed("All")}
                  >
                    All
                  </div>
                  <div
                    className={`option`}
                    onClick={() => this.showPlayed("Yes")}
                  >
                    Played
                  </div>
                  <div
                    className={`option`}
                    onClick={() => this.showPlayed("No")}
                  >
                    Not played
                  </div>
                </div>
              </div>
            </div>
            <MatchesList matches={this.state.filteredMatches} />
          </div>
          <div className="right">
            <LeagueTable />
          </div>
        </div>
      </div>
    );
  }
}

export default TheMatches;
