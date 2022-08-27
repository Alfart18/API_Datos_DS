const si = require('systeminformation');

exports.getData = async function (req, res) {
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
  }

