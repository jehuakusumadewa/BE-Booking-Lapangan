const express = require('express');

const router = express.Router();

const { getAll, getById, deleteById, updateById } = require('../controllers/user.controller');

router.get("/data", getAll);
router.get("/data/:id", getById);
router.delete("/data/:id", deleteById);
router.patch("/update/:id", updateById)

module.exports = router;