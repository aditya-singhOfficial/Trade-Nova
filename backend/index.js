require("dotenv").config();

const express = require("express");
const { connectToDB } = require("./config/mongooseConfig");
const { HoldingModel } = require("./models/HoldingModel")
const { PositionsModel } = require("./models/PositionsModel")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express();
const PORT = process.env.PORT || 3000;

connectToDB();
app.use(cors());
app.use(bodyParser.json());
app.get("/allHoldings", async (req, res) => {
    try {
        let allHoldings = await HoldingModel.find({});
        res.status(200).json({
            success: true,
            holdings: allHoldings
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
})

app.get("/allPositions", async (req, res) => {
    try {
        const allPositions = await PositionsModel.find({});
        res.status(200).json({
            success: true,
            positions: allPositions
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
})

app.listen(PORT, () => {
    console.log(`App is listening at PORT ${PORT}`);
})