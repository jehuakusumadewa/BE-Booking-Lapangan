const { booking: bookingModel } = require('../models');

const createBooking = async (req, res, next) => {
    const { tanggal_main, tanggal_booking, id_booking, nama_team, kategori, bukti, no_wa, nama_owner } = req.body;

    try {
        await bookingModel.create({
            tanggal_main: tanggal_main,
            tanggal_booking: tanggal_booking,
            id_booking: id_booking,
            nama_team: nama_team,
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

module.exports = {
    createBooking
}