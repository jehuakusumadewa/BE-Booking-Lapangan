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

module.exports = {
    createRekening
}