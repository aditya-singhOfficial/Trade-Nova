const httpStatus = require("http-status")
const bcrypt = require("bcrypt")
const crypto = require("crypto");
const { User } = require("../models/User.model.js")

const signup = async (req, res) => {
    const { name, username, email, password } = req.body;

    try {
        if (!name || !username || !email || !password) {
            return res
                .status(400)
                .json({
                    "message": `All fields are required`,
                    "success": false
                })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!emailRegex.test(email)) {
            return res
                .status(400)
                .json({
                    message: "Invalid email format",
                    "success": false
                });
        }

        const existingUser = await User.findOne({
            $or: [{ email }, { username }]
        });
        if (existingUser) {
            return res
                .status(409)
                .json({
                    message: "User already exists",
                    "success": false
                });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User(
            {
                name: name,
                username: username,
                email: email,
                password: hashedPassword
            }
        );
        await newUser.save();

        res
            .status(201)
            .json({
                "message": `User created successfully`,
                "success": true
            })

    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({
                "message": `Something went wrong!`,
                "success": false
            })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res
                .status(400)
                .json({
                    "message": `All fields are required`,
                    "success": false
                })
        }

        const userExists = await User.findOne({ email: email.toLowerCase() })
        if (!userExists) {
            return res
                .status(404)
                .json({
                    message: "User does not exist",
                    "success": false
                });
        }

        const isMatch = await bcrypt.compare(password, userExists.password);
        if (!isMatch) {
            return res
                .status(400)
                .json({
                    "message": `Invalid Credentials`,
                    "success": false
                })
        }

        const token = crypto.randomBytes(32).toString("hex");
        const expiry = new Date(Date.now() + 60 * 60 * 1000);
        userExists.token = token;
        userExists.tokenExpiry = expiry;
        await userExists.save();

        res.status(200).json({
            "message": `User logged in successfully`,
            "token": token,
            "success": true
        })
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({
                "message": `Something went wrong!`,
                "success": false
            })
    }
}

module.exports = { signup, login };