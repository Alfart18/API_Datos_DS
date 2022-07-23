const express = require("express");
const si = require('systeminformation');
const router = express.Router();

router.get('/',async function (req, res) {
  res.json([
    {
         Marca : ((await si.diskLayout())[0].vendor),
         Modelo : ((await si.diskLayout())[0].name),
         Numero_serie : ((await si.diskLayout())[0].serialNum),
         Dispostivo : ((await si.diskLayout())[0].device),
         Tipo : ((await si.diskLayout())[0].type),
         Capacidad : ((await si.diskLayout())[0].size) / 0.000000000001
    }
  ])
})

module.exports = router;