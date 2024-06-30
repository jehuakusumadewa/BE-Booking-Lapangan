const { lapangan: lapanganModels } = require('../models');

const createLapangan = async (req, res, next) => {
    const { nama_owner, nama_lapangan, tipe_lapangan, harga, status, foto } = req.body;

    try {
        await lapanganModels.create({
            nama_owner: nama_owner,
            nama_lapangan: nama_lapangan,
            tipe_lapangan: tipe_lapangan,
            harga: harga,
            status: status,
            foto: foto
        })

        return res.status(200).json({
            success: true,
            message: `create lapangan successfuly`,
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }
}

const getAll = async (req, res) => {
    try {
        const response = await lapanganModels.findAll();

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

const getById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await lapanganModels.findOne({
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
        const response = await lapanganModels.findOne({
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

module.exports = {
    createLapangan,
    getAll,
    getById,
    deleteById
}