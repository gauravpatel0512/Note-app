console.log("Notes Manager App by Gaurav Patel");

const express = require("express");
const app = express();
const notes = require("./routes/notes");
const connectDB = require("./db/connect");
require("dotenv").config();
const cors = require("cors");
//middleware
app.use(express.static("./public"));
app.use(express.json());
app.use(cors());

//Routes

app.use("/api/v1/notes", notes);

const port = 5000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, console.log(`Server is listening on port ${port}...`));
	} catch (error) {
		console.log(error);
	}
};
start();
