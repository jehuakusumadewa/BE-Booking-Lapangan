const { user: userModels } = require('../models');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const register = async (req, res, next) => {
    const { nama, username, password, level } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);
    console.log("passwordHash", passwordHash);
    await userModels
        .create({
            nama: nama,
            username: username,
            password: passwordHash,
            level: level,

        })
        .then((user) => {
            if (!user) {
                return res.status(500).send({
                    message: "Failed to register user",
                    data: null,
                });
            }

            return res.status(201).send({
                message: "User successfully registered",
                data: null,
            });
        })
        .catch((err) => {
            next(err);
        });
};

const login = async (req, res, next) => {
    const { username, password } = req.body;
    try {

        const user = await userModels.findOne({ where: { username } });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid password",
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                username: user.username,
            },
            process.env.JWT_SECRET
        );

        return res.status(200).json({
            success: true,
            message: `Login successfull`,
            data: {
                token,
            },
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }
}

module.exports = {
    register, login
}