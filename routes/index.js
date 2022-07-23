const express = require('express');
const sistemaRouter = require('./sistema.route');
const cpuRouter = require('./cpu.route');
const placaRouter = require('./placa.route');
const ramRouter = require('./ram.route');
const discoRouter = require('./disco.route');
const biosRouter = require('./bios.route')
const redRouter = require('./red.route')
const programasRouter = require('./programas.route')
const usbRouter = require('./usb.route')

function rutas(app) {
  app.get('/',(req, res)=> {
    res.send("API 'Es un Rasho es un mostruo' ACTIVAO 24/7")
   });
  const router = express.Router();
  app.use('/DS', router)
  router.use('/sistema', sistemaRouter); 
  router.use('/procesador', cpuRouter); 
  router.use('/placa', placaRouter); 
  router.use('/RAM', ramRouter); 
  router.use('/disco', discoRouter); 
  router.use('/bios', biosRouter); 
  router.use('/red', redRouter); 
  router.use('/programas', programasRouter); 
  router.use('/usb', usbRouter); 
}
 
module.exports = rutas;     