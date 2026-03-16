const { model } = require("mongoose");

const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrdersModel = model("position", OrdersSchema);

module.exports = { OrdersModel };