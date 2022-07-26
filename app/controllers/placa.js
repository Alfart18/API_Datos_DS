const si = require('systeminformation');

exports.getData = async function (req, res) {
    res.json([
        {
            Marca: (await si.baseboard()).manufacturer,
            Modelo: (await si.baseboard()).model,
            Version: (await si.baseboard()).version,
            Numero_serie: (await si.baseboard()).serial,
            Men_Max: (await si.baseboard()).memMax,
            Ran_Men: (await si.baseboard()).memSlots,
        }
    ])
}