// Required
const argv = require('./config/yargs').argv;
const for_do = require('./for_do/for_do');
const colors = require('colors');
// .Required

console.log(argv);

// Variables
let comando = argv._[0];
// .Variables

// functions
switch (comando) {
    case 'new':
        let tarea = for_do.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'list':
        let listado = for_do.getListado();
        for (let tarea of listado) {
            console.log('============For Do============='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('==============================='.green);
        }

        break;
    case 'update':
        let actualizado = for_do.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    default:
        console.log('Comando no reconocido')

}
// .functions