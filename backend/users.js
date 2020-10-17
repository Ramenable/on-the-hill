const mongoose = require("mongoose");

const user = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    roomCode: {
        type: String,
        unique: true,
        required: true,
    },
});

module.exports = mongoose.model("User", user);