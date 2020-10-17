const express = require("express");
const GroceryList = require("../GroceryList");
const router = express.Router();

router.get("/", (req, res) => {
	GroceryList.find()
	  .then((data) => res.status(200).json(data))
	  .catch((err) => res.status(500).json(err));
});

module.exports = router;