const express = require('express');

const router = express.Router();

const { createBooking, getAll, getById, deleteById, updateBooking } = require('../controllers/booking.controller');

const { validateToken } = require('../middlewares/auth')

router.post("/create", validateToken, createBooking);
router.get("/data", validateToken, getAll);
router.get("/data/:id", validateToken, getById);
router.delete("/data/:id", validateToken, deleteById)
router.patch("/data/:id", validateToken, updateBooking)

module.exports = router;