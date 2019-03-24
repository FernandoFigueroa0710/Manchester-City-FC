import React from "react";
import Layout from "../HOC/Layout";
import { Switch, Route } from "react-router-dom";

import Home from "../components/home";
import SignIn from "../components/signin";
import PrivateRoute from "../components/authRoutes/PrivateRoutes";

import Dashborad from "../components/admin/Dashboard";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          path="/dashboard"
          extact
          component={Dashborad}
        />
        <Route exact component={SignIn} path="/sign_in" />
        <Route exact component={Home} path="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;
