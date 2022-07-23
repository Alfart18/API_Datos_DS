const express = require("express");
const si = require('systeminformation');
const router = express.Router();

router.get('/',async function (req, res) {
  res.json([
    {
         Marca : (await si.bios()).vendor,
         Version : (await si.bios()).version,
         Numero_serie : (await si.bios()).serial,
         Fecha_Lanzamiento : (await si.bios()).releaseDate
    }
  ])
})

module.exports = router;