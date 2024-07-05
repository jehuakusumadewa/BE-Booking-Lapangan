const express = require('express');

const router = express.Router();

const { createRekening, getAll, getById, deleteById } = require('../controllers/rekening.controller');

router.post("/create", createRekening);
router.get("/data", getAll);
router.get("/data/:id", getById);
router.delete("/data/:id", deleteById);

module.exports = router;