const express = require("express");
const si = require('systeminformation');
const router = express.Router();

router.get('/',async function (req, res) {
    res.json([
        {
            Marca :  ((await si.memLayout())[0].manufacturer) + "", 
            Modelo : ((await si.memLayout())[0].type),         
            Número_Serie : ((await si.memLayout())[0].serialNum),  
            Men_Total: (await si.mem()).total / 1000000000,
            Men_Libre: (await si.mem()).free / 1000000000,
            Men_Used: (await si.mem()).used / 1000000000
        }
    ])
})

module.exports = router;