const si = require('systeminformation');

exports.getData = async function (req, res) {
    res.json([
      {
        Dispositivo: "CPU",
        Carga_Media: (((await si.currentLoad()).avgLoad)),
        Carga_Actual: (((await si.currentLoad()).currentLoad)),
        Carga_Usuario: (((await si.currentLoad()).currentLoadUser)),
        Carga_Sistema: (((await si.currentLoad()).currentLoadSystem)),
      },
  
      {
        Dispositivo: "Procesos",
        Corriendo: (((await si.processes()).running)),
        Bloqueado: (((await si.processes()).blocked)),
        Durmiendo: (((await si.processes()).sleeping)),
        Desconocido: (((await si.processes()).unknown)),
        Node: (((await si.processLoad('node')))),
        Firefox: (((await si.processLoad('firefox'))))
      }
    ])
  }