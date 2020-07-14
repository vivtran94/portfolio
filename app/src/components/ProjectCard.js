import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default function ProjectCard() {
	return (
		<BrowserRouter>
			<Link className="item" to="/title">
				<h1>Project Card</h1>
				<h1>Title</h1>
				<img>Screenshot</img>
				<p>Description</p>
				<p>Stack Used</p>
			</Link>
		</BrowserRouter>
	);
}
