const express = require('express');

const router = express.Router();

const { getAll, getById, deleteById, updateById } = require('../controllers/user.controller');

const { validateToken } = require('../middlewares/auth')

router.get("/data", validateToken, getAll);
router.get("/data/:id", validateToken, getById);
router.delete("/data/:id", validateToken, deleteById);
router.patch("/data/:id", validateToken, updateById)

module.exports = router;