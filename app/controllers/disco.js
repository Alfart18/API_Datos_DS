const si = require('systeminformation');

exports.getData = async function (req, res) {
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
  }