const si = require('systeminformation');

exports.getData = async function (req, res) {
    res.json([
      {
           Dirección_IP : ((await si.networkInterfaces())[1].ip4),
           Dirección_MAC : ((await si.networkInterfaces())[1].mac),
           Mascara_RED : ((await si.networkInterfaces())[1].ip4subnet)
      }
    ])
  }