const si = require('systeminformation');

exports.getData = async function (req, res) {
    res.json([
      {
           Marca : (await si.bios()).vendor,
           Version : (await si.bios()).version,
           Numero_serie : (await si.bios()).serial,
           Lenguaje : (await si.bios()).language,
           Revisión : (await si.bios()).revision,
           Fecha_Lanzamiento : (await si.bios()).releaseDate,
           Caracteristicas : (await si.bios()).features
      }
    ])
  }