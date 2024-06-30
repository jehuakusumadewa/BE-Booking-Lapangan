const express = require('express');

const router = express.Router();

const { createRekening } = require('../controllers/rekening.controller');

router.post("/create", createRekening);

module.exports = router;