// Required
const argv = require('./config/yargs').argv;
// .Required

console.log(argv);

// Variables
let comando = argv._[0];
// .Variables

// functions
switch (comando) {
    case 'new':
        console.log('Crear To do');
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