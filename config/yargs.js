opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea'
    }
};
opts2 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'maraca como completado o pendiente la tarea'
    }
};

// Configuration of yargs
const argv = require('yargs')
    .command('new', 'Crear un nuevo elemento', opts)
    .command('update', 'Actualiza el estado de la tarea', opts2)
    .command('drop', 'elimina la tarea', opts)
    .help()
    .argv;

// .Configuration of yargs

// Exports
module.exports = {
    argv
};
// . Exports