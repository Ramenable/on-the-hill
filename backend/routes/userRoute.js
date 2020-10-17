const express = require("express");
const user = require("../users");
const router = express.Router();

router.get("/", (req, res) => {
	user.find()
	  .then((data) => res.status(200).json(data))
	  .catch((err) => res.status(500).json(err));
});

module.exports = router;