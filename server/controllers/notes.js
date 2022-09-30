const Note = require("../models/Note");

const getAllNotes = async (req, res) => {
	try {
		const notes = await Note.find({});
		res.status(200).json({ notes });
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const createNote = async (req, res) => {
	try {
		const note = await Note.create(req.body);
		res.status(201).json({ note });
	} catch (error) {
		res.status(500).json({ message: error });
	}
};
const getNote = async (req, res) => {
	try {
		const { id: noteID } = req.params;
		const note = await Note.findOne({ _id: noteID });
		if (!note) {
			return res.status(404).json({ message: `No Note with id :${noteID}` });
		}
		res.status(200).json({ note });
	} catch (error) {
		res.status(500).json({ message: error });
	}
};
const deleteNote = async (req, res) => {
	try {
		const { id: noteID } = req.params;
		const note = await Note.findOneAndDelete({ _id: noteID });
		if (!note) {
			res.status(404).json({ message: `No Note with id : ${noteID}` });
		}
		// res.status(200).json({ note });
		res.status(200).json({ status: `Note Deleted`, note });
	} catch (error) {
		res.status(500).json({ message: error });
	}
};
const updateNote = async (req, res) => {
	try {
		const { id: noteID } = req.params;

		const note = await Note.findOneAndUpdate({ _id: noteID }, req.body, {
			new: true,
			runValidators: true,
		});

		if (!note) {
			res.status(404).json({ message: `No Note with id : ${noteID}` });
		}
		res
			.status(200)
			.json({ id: noteID, status: `Note Updated`, data: req.body });
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

module.exports = {
	getAllNotes,
	createNote,
	getNote,
	updateNote,
	deleteNote,
};
