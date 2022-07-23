const express = require("express");
const si = require('systeminformation');
const router = express.Router();

router.get('/',async function (req, res) {
  res.json([
    {
         Dirección_IP : ((await si.networkInterfaces())[1].ip4),
         Dirección_MAC : ((await si.networkInterfaces())[1].mac),
         Mascara_RED : ((await si.networkInterfaces())[1].ip4subnet)
    }
  ])
})

module.exports = router;