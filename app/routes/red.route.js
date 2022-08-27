const express = require("express");
const router = express.Router();
const controller = require('../controllers/red')

router.get('/',controller.getData)

module.exports = router;