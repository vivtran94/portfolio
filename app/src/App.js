import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";

export default function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route exact path="/projects">
						<ProjectsPage />
					</Route>
					<Route exact path="/contact">
						<ContactPage />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}
