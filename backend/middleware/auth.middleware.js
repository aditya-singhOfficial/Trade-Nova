const { User } = require("../models/User.model");

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({
                message: "No token provided",
                success: false
            });
        }

        const user = await User.findOne({ token });

        if (!user) {
            return res.status(401).json({
                message: "Invalid token",
                success: false
            });
        }

        if (user.tokenExpiry < new Date()) {
            return res.status(401).json({
                message: "Token expired",
                success: false
            });
        }

        req.user = user;

        next();

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Something went wrong",
            success: false
        });
    }
};

module.exports = authMiddleware;