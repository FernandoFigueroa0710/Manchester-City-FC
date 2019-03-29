import React from "react";
import Layout from "../HOC/Layout";
import { Switch } from "react-router-dom";

import Home from "../components/home";
import SignIn from "../components/signin";
import PrivateRoute from "../components/authRoutes/PrivateRoutes";
import PublicRoute from "../components/authRoutes/PublicRoutes";

import Dashborad from "../components/admin/Dashboard";
import AdminMatches from "../components/admin/matches/";
import AddEditMatch from "../components/admin/matches/AddEditMatch";
import AdminPlayers from "../components/admin/players";
import AddEditPlayers from "../components/admin/players/AddEditPLayers";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          path="/admin_players/add_player"
          extact
          component={AddEditPlayers}
        />
        <PrivateRoute
          {...props}
          path="/admin_players/add_player/:id"
          extact
          component={AddEditPlayers}
        />
        <PrivateRoute
          {...props}
          path="/admin_players"
          extact
          component={AdminPlayers}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches/edit_match"
          extact
          component={AddEditMatch}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches/edit_match/:id"
          extact
          component={AddEditMatch}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches"
          extact
          component={AdminMatches}
        />
        <PrivateRoute
          {...props}
          path="/dashboard"
          extact
          component={Dashborad}
        />
        <PublicRoute
          {...props}
          restricted={true}
          exact
          component={SignIn}
          path="/sign_in"
        />
        <PublicRoute
          {...props}
          restricted={false}
          path="/"
          extact
          component={Home}
        />
      </Switch>
    </Layout>
  );
};

export default Routes;
