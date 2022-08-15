const express = require("express");
const si = require('systeminformation');
const router = express.Router();

router.get('/',async function (req, res) {
  res.json([
    {
      Procesos: ((await si.currentLoad())),
    }
  ])
})

module.exports = router;