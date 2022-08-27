const express = require("express");
const controller = require('../controllers/cpu')
const router = express.Router();

router.get('/', controller.getData)

module.exports = router;