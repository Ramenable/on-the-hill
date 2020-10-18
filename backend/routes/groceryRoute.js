const express = require("express");
const Grocery = require("../groceries");
const router = express.Router();

router.get("/", (req, res) => {
	Grocery.find()
	  .then((data) => res.status(200).json(data))
	  .catch((err) => res.status(500).json(err));
});

router.post("/addGrocery", (req, res) => {
	console.log(req.body.username);
	const grocery = new Grocery({
		username: req.body.username,
		roomCode: req.body.roomCode,
	});

	user
		.save()
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(500).json(err);
		})
});

module.exports = router;