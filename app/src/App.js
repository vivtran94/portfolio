import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { history } from "./history.js";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";

export default function App() {
	return (
		<div>
			<NavBar />
			<BrowserRouter history={history}>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/projects" component={ProjectsPage} />
					<Route exact path="/contact" component={ContactPage} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}
