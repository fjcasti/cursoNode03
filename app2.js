const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0]; // primer comando que se envíe

comando = argv._.find(function(cmd) {
    let retorno;
    switch (cmd) {
        case 'listar':
            retorno = cmd;
            break;
        case 'crear':
            retorno = cmd;
            break;
        default:
            console.log(`ignorando comando no reconocido (${cmd})`);
            retorno = false;
    }
    return retorno;
});

switch (comando) {
    case 'listar':
        console.log('listar');
        console.log(argv.base);
        console.log(argv.limite);
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Achivo creado: ', `${ archivo }`.yellow))
            .catch(error => console.log(error));
        break;
}