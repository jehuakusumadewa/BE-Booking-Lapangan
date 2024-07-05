const express = require('express');

const router = express.Router();

const { createBooking, getAll, getById, deleteById } = require('../controllers/booking.controller');

router.post("/create", createBooking);
router.get("/data", getAll);
router.get("/data/:id", getById);
router.delete("/data/:id", deleteById)

module.exports = router;