const si = require('systeminformation');

exports.getData = async function (req, res) {
    res.json([
      {
        RED: 'WIFI',
        Nombre : ((await si.wifiNetworks())[0].ssid),
        BSSID : ((await si.wifiNetworks())[0].bssid),
        Modo : ((await si.wifiNetworks())[0].mode),
        Canal : ((await si.wifiNetworks())[0].channel),
        Frecuencia : ((await si.wifiNetworks())[0].frequency),
        Nivel_Señal : ((await si.wifiNetworks())[0].signalLevel),
        Calidad: ((await si.wifiNetworks())[0].quality),
        Seguridad: ((await si.wifiNetworks())[0].security),
        wpaFlags: ((await si.wifiNetworks())[0].wpaFlags)
      },
      {
        RED: 'WIFI',
        Nombre : ((await si.wifiNetworks())[1].ssid),
        BSSID : ((await si.wifiNetworks())[1].bssid),
        Modo : ((await si.wifiNetworks())[1].mode),
        Canal : ((await si.wifiNetworks())[1].channel),
        Frecuencia : ((await si.wifiNetworks())[1].frequency),
        Nivel_Señal : ((await si.wifiNetworks())[1].signalLevel),
        Calidad: ((await si.wifiNetworks())[1].quality),
        Seguridad: ((await si.wifiNetworks())[1].security),
        wpaFlags: ((await si.wifiNetworks())[1].wpaFlags)
      },
      {
        RED: 'WIFI',
        Nombre : ((await si.wifiNetworks())[2].ssid),
        BSSID : ((await si.wifiNetworks())[2].bssid),
        Modo : ((await si.wifiNetworks())[2].mode),
        Canal : ((await si.wifiNetworks())[2].channel),
        Frecuencia : ((await si.wifiNetworks())[2].frequency),
        Nivel_Señal : ((await si.wifiNetworks())[2].signalLevel),
        Calidad: ((await si.wifiNetworks())[2].quality),
        Seguridad: ((await si.wifiNetworks())[2].security),
        wpaFlags: ((await si.wifiNetworks())[2].wpaFlags)
      }
    ])
  }