const { lapangan: lapanganModels } = require('../models');

const path = require('path');

const createLapangan = async (req, res, next) => {

    if (req.files === null) return res.status(404).json({ msg: "file not found" });
    const { nama_owner, nama_lapangan, tipe_lapangan, harga, status, foto } = req.body;

    const file = req.files.foto;
    // const fileSize = file.data.length;
    const ext = path.extname(file.name);
    // const displayName = file.name;
    const fileName = nama_lapangan + ext;
    const allowedType = ['.png', '.jpg', '.jpeg'];

    //filter file type
    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "type file not allowed" });

    file.mv(`./public/fileData/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message });
        try {
            await lapanganModels.create({
                nama_owner: nama_owner,
                nama_lapangan: nama_lapangan,
                tipe_lapangan: tipe_lapangan,
                harga: harga,
                status: status,
                foto: fileName
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
    });

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
const updateLapangan = async (req, res) => {
    const { id } = req.params;
    const { nama_owner, nama_lapangan, tipe_lapangan, harga, status, foto } = req.body;

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

        await response.update({

            nama_owner, nama_lapangan, tipe_lapangan, harga, status, foto
        })

        return res.status(200).json(
            {
                success: true,
                message: `update booking successfully`
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
    deleteById,
    updateLapangan
}