const { user: userModels } = require('../models');

const bcrypt = require('bcrypt')

const register = async (req, res, next) => {
    const { username, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);
    console.log("passwordHash", passwordHash);
    await userModels
        .create({
            username: username,
            password: passwordHash,
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

module.exports = {
    register
}