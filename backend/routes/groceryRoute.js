const express = require("express");
const Grocery = require("../groceries");
const router = express.Router();

router.get("/getGroceries", (req, res) => {
	var url_parts = url.parse(req.url, true);
    Grocery.find({ roomCode: url_parts.query.room })
        .then(results => {
          res.status(200).json(results);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

router.post("/addGrocery", (req, res) => {
	const grocery = new Grocery({
		name: req.body.name,
		roomCode: req.body.roomCode,
		message: req.body.message,
		requester: req.body.requester,
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