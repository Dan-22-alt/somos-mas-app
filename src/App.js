import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "./config/RouterManager/Route";
import { Pages } from "./config/RouterManager/Pages";
import { userIsLogged } from "./features/auth/userIsLogged";
import "./App.css";

function App() {

	useEffect(() => {
    console.log(
		  userIsLogged()
				? "El usuario esta autenticado"
				: "El usuario no esta autenticado"
		)
  }, []);

	return (
		<Router>
			<Switch>
				{Pages.map(page => (
					<Route {...page} />
				))}
			</Switch>
		</Router>
	);
}

export default App;
