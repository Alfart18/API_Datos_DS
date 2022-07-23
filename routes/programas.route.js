const express = require("express");
const si = require('systeminformation');
const router = express.Router();

router.get('/',async function (req, res) {
  res.json([
    {
         Kernel : (await si.versions()).kernel,
         Sis_Operativo : (await si.versions()).systemOpenssl,
         npm : (await si.versions()).npm,
         Python : (await si.versions()).python3,
         Git : (await si.versions()).git,
         Java : (await si.versions()).java,
         Virtual_Box : (await si.versions()).virtualbox,
         Docker : (await si.versions()).docker,
         Php : (await si.versions()).php,
         Postgresql : (await si.versions()).postgresql,
         Mysql : (await si.versions()).mysql
    }
  ])
})

module.exports = router;