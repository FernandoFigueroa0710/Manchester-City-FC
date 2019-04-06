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
    playedFilter: "All",
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
      playedFilter: played,
      resultFilter: "All"
    });
  };

  showResult = result => {
    const list = this.state.matches.filter(match => {
      return match.result === result;
    });
    this.setState({
      filteredMatches: result === "All" ? this.state.matches : list,
      playedFilter: "All",
      resultFilter: result
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
                    className={`option ${
                      this.state.playedFilter === "All" ? "active" : ""
                    }`}
                    onClick={() => this.showPlayed("All")}
                  >
                    All
                  </div>
                  <div
                    className={`option ${
                      this.state.playedFilter === "Yes" ? "active" : ""
                    }`}
                    onClick={() => this.showPlayed("Yes")}
                  >
                    Played
                  </div>
                  <div
                    className={`option ${
                      this.state.playedFilter === "No" ? "active" : ""
                    }`}
                    onClick={() => this.showPlayed("No")}
                  >
                    Not played
                  </div>
                </div>
              </div>
              <div className="match_filters_box">
                <div className="tag">Result</div>
                <div className="cont">
                  <div
                    className={`option ${
                      this.state.playedFilter === "All" ? "active" : ""
                    }`}
                    onClick={() => this.showResult("All")}
                  >
                    All
                  </div>
                  <div
                    className={`option ${
                      this.state.resultFilter === "W" ? "active" : ""
                    }`}
                    onClick={() => this.showResult("W")}
                  >
                    W
                  </div>
                  <div
                    className={`option ${
                      this.state.resultFilter === "L" ? "active" : ""
                    }`}
                    onClick={() => this.showResult("L")}
                  >
                    L
                  </div>
                  <div
                    className={`option ${
                      this.state.resultFilter === "D" ? "active" : ""
                    }`}
                    onClick={() => this.showResult("D")}
                  >
                    Draw
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
