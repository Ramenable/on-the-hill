const express = require("express");
const User = require("../users");
const router = express.Router();

router.get("/", (req, res) => {
	User.find()
	  .then((data) => res.status(200).json(data))
	  .catch((err) => res.status(500).json(err));
});

router.post("/addUser", (req, res) => {
	console.log(req.body.username);
	const user = new User({
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

router.delete("/:userId", (req, res) => {
	User.remove({ _id: req.params.userId })
		.then((data) => res.status(200).json(data))
		.catch((err) => {
			res.status(500).json(err);
		});
});

module.exports = router;