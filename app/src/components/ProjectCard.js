import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard() {
	return (
		<Link className="item" to="/title">
			<h1>Project Card</h1>
			<h1>Title</h1>
			<img>Screenshot</img>
			<p>Description</p>
			<p>Stack Used</p>
		</Link>
	);
}
