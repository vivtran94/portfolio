import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default function NavBar() {
	return (
		<BrowserRouter>
			<Link className="item" to="/">
				About Me
			</Link>
			<Link className="item" to="/projects">
				Projects
			</Link>
		</BrowserRouter>
	);
}
