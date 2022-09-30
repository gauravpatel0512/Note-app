import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";

import EditIcon from "@mui/icons-material/Edit";

export default function Home() {
	const [notes, setNotes] = useState([]);

	const getNotes = async () => {
		const res = await axios.get("http://localhost:5000/api/v1/notes");
		console.log(res);
		setNotes(res.data.notes);
	};

	useEffect(() => {
		getNotes();
	}, []);

	const deleteNote = async (id) => {
		try {
			await axios.delete(`http://localhost:5000/api/v1/notes/${id}`);
			getNotes();
		} catch (error) {
			window.location.hrf = "/";
		}
	};

	return (
		<div className="note-wrapper">
			{notes.map((note) => (
				<div className="card" key={note._id}>
					<h3 title={note.title}>{note.title}</h3>
					<div className="text-wrapper">
						<p>{note.description}</p>
					</div>
					<div className="card-footer">
						<Link to={`edit/${note._id}`}>
							<EditIcon sx={{ fontSize: 20, color: "#ddd" }} />
						</Link>
					</div>
					<button className="close" onClick={() => deleteNote(note._id)}>
						<CancelIcon sx={{ fontSize: 20, color: "#ddd" }} />
					</button>
				</div>
			))}
		</div>
	);
}
