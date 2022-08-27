const si = require('systeminformation');

exports.getData = async function (req, res) {
    res.json([
      {
           Kernel : (await si.versions()).kernel,
           Sis_Operativo : (await si.versions()).systemOpenssl,
           npm : (await si.versions()).npm,
           Git : (await si.versions()).git,
           Java : (await si.versions()).java,
           Virtual_Box : (await si.versions()).virtualbox,
           Docker : (await si.versions()).docker,
           Php : (await si.versions()).php,
           Postgresql : (await si.versions()).postgresql,
           Mysql : (await si.versions()).mysql,
           Python : (await si.versions()).python3,
           versiones: (await si.versions())
      }
    ])
  }