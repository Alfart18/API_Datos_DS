const si = require('systeminformation');

exports.getData = async function (req, res) {
  res.json([
    {
      Intefaz: ((await si.networkInterfaces())[0].iface),
      Nombre: ((await si.networkInterfaces())[0].ifaceName),
      Dirección_IPv4: ((await si.networkInterfaces())[0].ip4),
      Mascara_RED_IPv4: ((await si.networkInterfaces())[0].ip4subnet),
      Dirección_MAC: ((await si.networkInterfaces())[0].mac),
      Dirección_IPv6: ((await si.networkInterfaces())[0].ip6),
      Mascara_RED_IPv6: ((await si.networkInterfaces())[0].ip6subnet),
    },

    {
      Intefaz: ((await si.networkInterfaces())[1].iface),
      Nombre: ((await si.networkInterfaces())[1].ifaceName),
      Dirección_IPv4: ((await si.networkInterfaces())[1].ip4),
      Mascara_RED_IPv4: ((await si.networkInterfaces())[1].ip4subnet),
      Dirección_MAC: ((await si.networkInterfaces())[1].mac),
      Dirección_IPv6: ((await si.networkInterfaces())[1].ip6),
      Mascara_RED_IPv6: ((await si.networkInterfaces())[1].ip6subnet),
    }
  ])
}