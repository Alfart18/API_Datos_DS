const si = require('systeminformation');

exports.getData = async function (req, res) {
  res.json([
    {
      Dirección_IP1: ((await si.networkInterfaces())[0].ip4),
      Dirección_MAC1: ((await si.networkInterfaces())[0].mac),
      Mascara_RED1: ((await si.networkInterfaces())[0].ip4subnet),
      Dirección_IP: ((await si.networkInterfaces())[1].ip4),
      Dirección_MAC: ((await si.networkInterfaces())[1].mac),
      Mascara_RED: ((await si.networkInterfaces())[1].ip4subnet),
      RED: ((await si.networkInterfaces())),
      RED2: ((await si.networkGatewayDefault())),
      RED3: ((await si.networkConnections())),
      RED4: ((await si.networkStats()))
    }
  ])
}