const express = require("express");
const si = require('systeminformation');
const router = express.Router();

router.get('/',async function (req, res) {
  res.json([
    {
      Dispositivo: "CPU",
      Carga_Media: (((await si.currentLoad()).avgLoad)),
      Carga_Actual: (((await si.currentLoad()).currentLoad)),
      Carga_Usuario: (((await si.currentLoad()).currentLoadUser)),
      Carga_Sistema: (((await si.currentLoad()).currentLoadSystem)),
    },

    {
      Dispositivo: "Procesos",
      Corriendo: (((await si.processes()).running)),
      Bloqueado: (((await si.processes()).blocked)),
      Durmiendo: (((await si.processes()).sleeping)),
      Desconocido: (((await si.processes()).unknown)),
      Node: (((await si.processLoad('node')))),
      Firefox: (((await si.processLoad('firefox'))))
    }
  ])
})

module.exports = router;