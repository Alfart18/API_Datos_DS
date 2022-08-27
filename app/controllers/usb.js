const si = require('systeminformation');

exports.getData = async function (req, res) {
    res.json([
        {
            Entrada: "Entrada N°1",
            Tipo: ((await si.usb())[1].type),
            Marca: ((await si.usb())[1].vendor),
            Nombre: ((await si.usb())[1].name),
            ID: ((await si.usb())[1].id)
        },
        {
            Entrada: "Entrada N°2",
            Tipo: ((await si.usb())[2].type),
            Marca: ((await si.usb())[2].vendor),
            Nombre: ((await si.usb())[2].name),
            ID: ((await si.usb())[2].id)
        },
        {
            Entrada: "Entrada N°3",
            Tipo: ((await si.usb())[3].type),
            Marca: ((await si.usb())[3].vendor),
            Nombre: ((await si.usb())[3].name),
            ID: ((await si.usb())[3].id)
        },
        {
            Entrada: "Entrada N°4",
            Tipo: ((await si.usb())[4].type),
            Marca: ((await si.usb())[4].vendor),
            Nombre: ((await si.usb())[4].name),
            ID: ((await si.usb())[4].id)
        },
        {
            Entrada: "Entrada N°5",
            Tipo: ((await si.usb())[5].type),
            Marca: ((await si.usb())[5].vendor),
            Nombre: ((await si.usb())[5].name),
            ID: ((await si.usb())[5].id)
        }
    ])
}