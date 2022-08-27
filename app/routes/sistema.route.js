const express = require("express");
const router = express.Router();
const controller = require('../controllers/sistema')

router.get('/',controller.getData)

module.exports = router;