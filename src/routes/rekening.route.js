const express = require('express');

const router = express.Router();

const { createRekening, getAll, getById, deleteById, updateRekening } = require('../controllers/rekening.controller');

const { validateToken } = require('../middlewares/auth.js')

router.post("/create", validateToken, createRekening);
router.get("/data", validateToken, getAll);
router.get("/data/:id", validateToken, getById);
router.delete("/data/:id", validateToken, deleteById);
router.patch("/data/:id", validateToken, updateRekening)

module.exports = router;