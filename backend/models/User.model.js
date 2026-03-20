const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, "Please use a valid email"]
        },
        password: {
            type: String,
            required: true
        },
        token: {
            type: String,
            default: null
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", UserSchema);

module.exports = { User };