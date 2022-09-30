import React from "react";
import CreateNote from "./Notes/CreateNote";
import EditNote from "./Notes/EditNote";
import Home from "./Notes/Home";
import Header from "./Notes/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Notes() {
	return (
		<Router>
			<div className="notes-page">
				<Header />
				<section>
					<Routes>
						<Route path="/" element={<Home />} exact />
						<Route path="/create" element={<CreateNote />} exact />
						<Route path="/edit/:id" element={<EditNote />} exact />
					</Routes>
				</section>
			</div>
		</Router>
	);
}
