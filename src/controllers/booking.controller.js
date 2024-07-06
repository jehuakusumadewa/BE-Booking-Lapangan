const { booking: bookingModel } = require('../models');

const createBooking = async (req, res, next) => {
    const { tanggal_main, tanggal_booking, id_lapangan, nama_team, jam_booking_mulai, jam_booking_akhir, kategori, bukti, no_wa, nama_owner } = req.body;

    try {
        await bookingModel.create({
            tanggal_main: tanggal_main,
            tanggal_booking: tanggal_booking,
            id_lapangan: id_lapangan,
            nama_team: nama_team,
            jam_booking_mulai: jam_booking_mulai,
            jam_booking_akhir: jam_booking_akhir,
            kategori: kategori,
            bukti: bukti,
            no_wa: no_wa,
            nama_owner: nama_owner
        })

        return res.status(200).json({
            success: true,
            message: `create booking successfull`,
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
        const response = await bookingModel.findAll();

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
        const response = await bookingModel.findOne({
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
        const response = await bookingModel.findOne({
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
const updateBooking = async (req, res) => {
    const { id } = req.params;
    const { tanggal_main, tanggal_booking, id_lapangan, nama_team, jam_booking_mulai, jam_booking_akhir, kategori, bukti, no_wa, nama_owner } = req.body;

    try {
        const response = await bookingModel.findOne({
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

            tanggal_main, tanggal_booking, id_lapangan, nama_team, jam_booking_mulai, jam_booking_akhir, kategori, bukti, no_wa, nama_owner
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
    createBooking,
    getAll,
    getById,
    deleteById,
    updateBooking
}