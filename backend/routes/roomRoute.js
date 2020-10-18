const express = require("express");
const Room = require("../rooms");
const router = express.Router();

router.get("/getRoom", (req, res) => {
	room.find()
	  .then((data) => res.status(200).json(data))
	  .catch((err) => res.status(500).json(err));
});

router.post("/addRoom", (req, res) => {
    const room = new Room({
        roomCode: req.body.roomCode,
        members: req.body.members,
        numMembers: req.body.numMembers,
    });

    room
        .save()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

module.exports = router;