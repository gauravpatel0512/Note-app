import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateNote() {
	const [note, setNote] = useState({
		title: "",
		description: "",
	});

	const navigate = useNavigate();

	const onChangeInput = (e) => {
		const { name, value } = e.target;
		setNote({ ...note, [name]: value });
	};

	const createNote = async (e) => {
		e.preventDefault();
		try {
			const { title, description } = note;
			const newNote = {
				title,
				description,
			};

			await axios.post("http://localhost:5000/api/v1/notes", newNote);
			return navigate("/");
		} catch (error) {
			window.location.href = "/";
		}
	};

	return (
		<div className="create-note">
			<h2>Create Note</h2>
			<form onSubmit={createNote} autoComplete="off">
				<div className="row">
					<label htmlFor="">Title</label>
					<input
						type="text"
						value={note.title}
						id="title"
						name="title"
						required
						onChange={onChangeInput}
					/>
				</div>
				<div className="row">
					<label htmlFor="">Description</label>
					<textarea
						type="text"
						value={note.description}
						id="description"
						name="description"
						required
						rows="10"
						onChange={onChangeInput}
					/>
				</div>
				<button type="submit">Save</button>
			</form>
		</div>
	);
}
