const express = require("express");
const si = require('systeminformation');
const router = express.Router();

router.get('/', async function (req, res) {
    res.json([
        {
            Marca: (await si.baseboard()).manufacturer,
            Modelo: (await si.baseboard()).model,
            Version: (await si.baseboard()).version,
            Numero_serie: (await si.baseboard()).serial,
            Men_Max: (await si.baseboard()).memMax,
            RAM_Men: (await si.baseboard()).memSlots,
        }
    ])
})

module.exports = router;