import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<div>
			<Link className="item" to="/">
				About Me
			</Link>
			<Link className="item" to="/projects">
				Projects
			</Link>
		</div>
	);
}
