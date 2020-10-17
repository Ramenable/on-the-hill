const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv/config");
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true});

const groceryRoute = require(---);
app.use("/Grocery", groceryRoute);

app.listen(3000);