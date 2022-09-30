const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "must provide title"],
	},

	description: {
		type: String,
	},
});

module.exports = mongoose.model("Note", NoteSchema);
