// Required
const argv = require('./config/yargs').argv;
const for_do = require('./for_do/for_do');
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
        console.log('Listar To do');
        break;
    case 'update':
        console.log('Actualizar To do');
        break;
    default:
        console.log('Comando no reconocido')

}
// .functions