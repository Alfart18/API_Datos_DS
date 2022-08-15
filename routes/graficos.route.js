const express = require("express");
const si = require('systeminformation');
const router = express.Router();

router.get('/', async function (req, res) {
  res.json([
    {
      Entrada: "MONITOR",
      Marca: ((await si.graphics()).displays[0].vendor),
      Modelo: ((await si.graphics()).displays[0].model),
      Nombre_Dispositivo: ((await si.graphics()).displays[0].deviceName),
      Conexión: ((await si.graphics()).displays[0].connection),
      Profundidad_Pixeles: ((await si.graphics()).displays[0].pixelDepth),
      Tamaño_X: ((await si.graphics()).displays[0].sizeX),
      Tamaño_Y: ((await si.graphics()).displays[0].sizeY),
      Resolución_X: ((await si.graphics()).displays[0].resolutionX),
      Resolución_Y: ((await si.graphics()).displays[0].resolutionY),
    },

    {
      Entrada: "CONTROLADOR",
      Marca: ((await si.graphics()).controllers[0].vendor),
      Modelo: ((await si.graphics()).controllers[0].model),
      Bus: ((await si.graphics()).controllers[0].bus),
      Dirección_Bus: ((await si.graphics()).controllers[0].busAddress),
      VRAM: ((await si.graphics()).controllers[0].vram),
    }

  ])
})

module.exports = router;