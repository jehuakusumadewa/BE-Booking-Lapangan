const { rekening: rekeningModels } = require('../models');

const createRekening = async (req, res, next) => {
    const { nama_bank, cabang_bank, kota_kabupaten, nama, no_rekening, atas_nama } = req.body;

    try {
        await rekeningModels.create({
            nama_bank: nama_bank,
            cabang_bank: cabang_bank,
            kota_kabupaten: kota_kabupaten,
            nama: nama,
            no_rekening: no_rekening,
            atas_nama: atas_nama,
        })

        return res.status(200).json({
            success: true,
            message: `create rekening successfuly`,
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
        const response = await rekeningModels.findAll();

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
        const response = await rekeningModels.findOne({
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
        const response = await rekeningModels.findOne({
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
    createRekening,
    getAll,
    getById,
    deleteById
}