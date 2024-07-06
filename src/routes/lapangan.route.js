const express = require('express');

const router = express.Router();

const { createLapangan, getAll, getById, deleteById, updateLapangan } = require('../controllers/lapangan.controller');

const { validateToken } = require('../middlewares/auth.js')


router.post("/create", validateToken, createLapangan);
router.get("/data", validateToken, getAll);
router.get("/data/:id", validateToken, getById);
router.delete("/data/:id", validateToken, deleteById);
router.patch("/data/:id", validateToken, updateLapangan)

module.exports = router;