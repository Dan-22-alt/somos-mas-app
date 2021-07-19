import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "./config/RouterManager/Route";
import { Pages } from "./config/RouterManager/Pages";
import userIsLogged from "./features/auth/userIsLogged";
import { RouteP } from "./config/RouterManager/RoutePublic";
import { PagesP } from "./config/RouterManager/PagePublic";
import Layout from "./components/Layout";

function App() {
  useEffect(() => {
    console.log(
      `${
        userIsLogged()
          ? "El usuario esta autenticado"
          : "El usuario no esta autenticado"
      }`
    );
  }, []);

  return (
    <Layout>
      <Router>
        <Switch>
          {Pages.map((page) => (
            <Route {...page} />
          ))}
          {PagesP.map((page) => (
            <RouteP {...page} />
          ))}
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
