const express = require("express");
const si = require('systeminformation');
const router = express.Router();

router.get('/',async function (req, res) {
  res.json([
      {
         Sistema_Operativo : (await si.osInfo()).platform,
         Distrubucion : (await si.osInfo()).distro,
         Version : (await si.osInfo()).release,
         Arquitectura : (await si.osInfo()).arch,
         Numero_serie : (await si.osInfo()).serial,
         Kernel : (await si.osInfo()).kernel,
         Host_name : (await si.osInfo()).hostname,
         Build : (await si.osInfo()).build
      }
  ])
})

  module.exports = router;