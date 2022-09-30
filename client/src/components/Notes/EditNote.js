import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditNote() {
	const [note, setNote] = useState({
		title: "",
		description: "",
		id: "",
	});

	const navigate = useNavigate();

	let { id } = useParams();
	useEffect(() => {
		const getNote = async () => {
			if (id) {
				const res = await axios.get(`http://localhost:5000/api/v1/notes/${id}`);

				setNote({
					title: res.data.note.title,
					description: res.data.note.description,
					id: res.data.note._id,
				});
			}
		};
		getNote();
	}, [id]);

	const onChangeInput = (e) => {
		const { name, value } = e.target;
		setNote({ ...note, [name]: value });
	};

	const editNote = async (e) => {
		e.preventDefault();
		try {
			const { title, description, id } = note;
			const newNote = {
				title,
				description,
			};

			await axios.patch(`http://localhost:5000/api/v1/notes/${id}`, newNote);
			return navigate("/");
		} catch (error) {
			window.location.href = "/";
		}
	};

	return (
		<div className="edit-note">
			<h2>Edit Note</h2>
			<form onSubmit={editNote} autoComplete="off">
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
