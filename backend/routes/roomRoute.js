const express = require("express");
const Room = require("../rooms");
const router = express.Router();

router.get("/getRoom", (req, res) => {
    Room.find({ roomCode: '5555' })
        .then(results => {
          res.status(200).json(results);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

router.post("/addRoom", (req, res) => {
    roomexists = Room.exists({ roomCode: req.body.roomCode }); 
    if (roomexists == true) {
        res.status(500).json({ error: "The room already exists" });
    } else {
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
    }
    
});

router.post("/updateRoom", (req, res) => {
    roomexists = Room.exists({ roomCode: req.body.roomCode }); 
    if (roomexists == false) {
        res.status(500).json({ error: "The room doesn't exist" });
    } else {
        Room.updateOne(
        { roomCode: req.body.roomCode },
        { 
          $push: { members: [req.body.username] }, 
          $inc: { numMembers: 1} 
        },
        function(err, result) {
          if (err) {
            res.send(err);
          } else {
            res.send(result);
          }
        }
      );
    }
        // .then((data) => {
        //     res.status(200).json(data);
        // })
        // .catch((err) => {
        //     res.status(500).json(err);
        // });
});

module.exports = router;