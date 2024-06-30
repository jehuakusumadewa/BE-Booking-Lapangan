const express = require('express');

const router = express.Router();

const { createLapangan, getAll, getById, deleteById } = require('../controllers/lapangan.controller');


router.post("/create", createLapangan);
router.get("/data", getAll);
router.get("/data/:id", getById);
router.delete("/data/:id", deleteById);

module.exports = router;