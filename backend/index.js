const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv/config");
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true});

const user = require(./routes/userRoute);
app.use("/users", user);

app.listen(3000);