
   const descripcion = {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea'
    };


    const completado = {
        default: true,
        alias: 'c',
        desc: 'maraca como completado o pendiente la tarea'
    };

// Configuration of yargs
const argv = require('yargs')
    .command('new', 'Crear un nuevo elemento', {descripcion})
    .command('update', 'Actualiza el estado de la tarea', {descripcion, completado})
    .command('drop', 'elimina la tarea', {descripcion})
    .help()
    .argv;

// .Configuration of yargs

// Exports
module.exports = {
    argv
};
// . Exports