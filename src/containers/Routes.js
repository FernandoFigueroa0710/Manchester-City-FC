import React from "react";
import Layout from "../HOC/Layout";
import { Switch } from "react-router-dom";

import Home from "../components/home";
import SignIn from "../components/signin";
import PrivateRoute from "../components/authRoutes/PrivateRoutes";
import PublicRoute from "../components/authRoutes/PublicRoutes";

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
