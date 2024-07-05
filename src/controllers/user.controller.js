const { user: userModels } = require('../models');

// const createUser = async (req, res, next) => {
//     const { nama, username, password, level } = req.body;

//     try {
//         await userModels.create({
//             nama: nama,
//             username: username,
//             password: password,
//             level: level
//         })
//         return res.status(200).json({
//             success: true,
//             message: `create user successfull`,
//         })

//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: error.message,
//         });
//     }
// }

const getAll = async (req, res) => {
    try {
        const response = await userModels.findAll();

        return res.status(200).json(
            {
                succes: true,
                data: response
            }
        )
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

const getById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await userModels.findOne({
            where: {
                id: id
            }
        });

        return res.status(200).json(
            {
                success: true,
                data: response
            }
        )
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

const deleteById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await userModels.findOne({
            where: {
                id: id
            }
        });

        if (!response) {
            return res.status(404).json(
                {
                    success: false,
                    message: `data not found`
                }
            )
        }

        await response.destroy();

        return res.status(200).json(
            {
                success: true,
                message: `delete successfully`
            }
        )
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

const updateById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await userModels.findOne({

        });

        if (!response) {
            return res.status(404).json(
                {
                    success: false,
                    message: `data not found`
                }
            )
        }

        return res.status(200).json(
            {
                success: true,
                message: `update user successfully`
            }
        )
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

module.exports = {
    getAll,
    getById,
    deleteById,
    updateById
}