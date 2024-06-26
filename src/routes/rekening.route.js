const express = require('express');

const router = express.Router();

const { createRekening } = require('../controllers/rekening.controllers');

router.post("/create", createRekening);

module.exports = router;