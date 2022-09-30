import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
	return (
		<header>
			<div className="logo">
				<h1>
					<Link to="/">Notes</Link>
				</h1>
			</div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/create">Create Note</Link>
				</li>
			</ul>
		</header>
	);
}
