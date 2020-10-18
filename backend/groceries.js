const mongoose = require("mongoose");

const grocery = mongoose.Schema({
    category: {
        type: String,
        index: true,
        required: false,
    },
    sharedStatus: {
        type: Number,
        index: true,
        required: true,
    },
    roomCode: {
        type: String,
        index: true,
        required: true,
    },
});

module.exports = mongoose.model("Grocery", grocery);