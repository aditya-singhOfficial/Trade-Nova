require("dotenv").config();

const express = require("express");
const { connectToDB } = require("./config/mongooseConfig");

const app = express();
const PORT = process.env.PORT || 3000;

connectToDB();

app.listen(PORT, () => {
    console.log(`App is listening at PORT ${PORT}`);
})