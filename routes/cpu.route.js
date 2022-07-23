const express = require("express");
const si = require('systeminformation');
const router = express.Router();

router.get('/',async function (req, res) {
  res.json([
    {
      Fabricante: (await si.cpu()).manufacturer,
      Marca: (await si.cpu()).brand,
      Modelo: (await si.cpu()).model,
      Familia: (await si.cpu()).family,
      Velocidad: (await si.cpu()).speed,
      Nucleos: (await si.cpu()).cores,
      Nucleos_Fisicos: (await si.cpu()).physicalCores,
      Velocidad_Max: (await si.cpu()).speedMax,
      Velocidad_Min: (await si.cpu()).speedMin
    }
  ])
})

module.exports = router;