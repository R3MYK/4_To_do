//Required
const fs = require('fs');

// Array
let listadoPorHacer = [];

// Function
const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer
};

// Guarda datos en un archivo
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw err;
        console.log('la información ha sido guardada');
    });
};

// Cargar datos anteriores en data.json
const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (e) {
        listadoPorHacer = []
    }
};

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    // Findindex devuelve la posición, si encuentra el elemeneto, si no lo encuentra un -1
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false
    }
};

const borrar = ( descripcion ) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter( tarea => {
        // devuelve aquellos elementos diferentes a la descripcion
        return tarea.descripcion !== descripcion
    });
    if ( listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
};


// Exports functions
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};