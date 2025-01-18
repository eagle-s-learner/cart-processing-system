const express = require("express");
const jsonWebToken = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const router = express.Router();
router.use(cookieParser());

const jwtSecret = process.env.JWT_SECRET;

async function checkAuth(req, res, next){
    const { token } = req.cookies;
    try {
        if (token) {
            jsonWebToken.verify(token, jwtSecret, {}, async (error, user1) => {
                if (error) {
                    throw error;
                }

                const response = await client.query(
                    `SELECT * FROM users WHERE email = ($1)`,
                    [user1.email]
                );
                // console.log(posts);

                req.user = response.rows[0];
            });
        }
        next();
    } catch (error) {
        // console.log(error)
        res.status(error.status).json({ message: error.message });
    }
};

module.exports = checkAuth;
