const express = require('express');

const router = express.Router();

const { createBooking, getAll, getById } = require('../controllers/booking.controller');

router.post("/create", createBooking);
router.get("/data", getAll);
router.get("/data/:id", getById);

module.exports = router;