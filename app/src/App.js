import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";

export default function App() {
	return (
		<div>
			<NavBar />
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
