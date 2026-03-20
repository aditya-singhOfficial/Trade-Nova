require("dotenv").config();

const express = require("express");
const { connectToDB } = require("./config/mongooseConfig");
const { HoldingModel } = require("./models/HoldingModel")
const { PositionsModel } = require("./models/PositionsModel")
const { OrdersModel } = require("./models/OrdersModel")
const cors = require("cors")
const bodyParser = require("body-parser")
const userRoutes = require("./routes/users.route.js")

const app = express();
const PORT = process.env.PORT || 3000;

connectToDB();
app.use(cors());
app.use(bodyParser.json());
app.use("/api/users", userRoutes);
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

app.post("/newOrder", async (req, res) => {
    const newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    })
    newOrder.save();

    const stock = await HoldingModel.findOne({ name: req.body.name });

    if (stock) {
        const buyQty = parseInt(req.body.qty);
        const buyPrice = parseFloat(req.body.price);

        const newQty = stock.qty + buyQty;

        const totalInvestment =
            stock.qty * stock.avg + buyQty * buyPrice;

        const newAvg = totalInvestment / newQty;

        stock.qty = newQty;
        stock.avg = newAvg;
        stock.price = buyPrice;

        await stock.save();
        res.json({ message: "Stock Updated", stock });
    } else {
        const newStock = await HoldingModel.create({
            name: req.body.name,
            qty: req.body.qty,
            avg: req.body.price,
            price: req.body.price,
            net: "+0%",
            day: "+0%"
        });
    }


    res.status(200).json({
        success: true,
        message: "Order created successfully"
    })
})

app.listen(PORT, () => {
    console.log(`App is listening at PORT ${PORT}`);
})