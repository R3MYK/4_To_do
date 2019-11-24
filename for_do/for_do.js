//Required
const fs = require('fs');

// Array
let listadoPorHacer = [];

// Function
//
const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push( porHacer);
    guardarDB();
    return porHacer
};

// Guarda datos en un archivo
const guardarDB = () => {
    let data = JSON.stringify( listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw err;
        console.log('la información ha sido guardada');
    });
};

const cargarDB

// Exports functions
module.exports = {
    crear
};