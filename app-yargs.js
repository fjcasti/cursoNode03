// nota que pone 'yargs' y no './yargs' (punto pleca) 
// al no llevar ruta indica que es un paqueta y debe de estar 
// instalado como dependencias (node-modules)
const argv = require('yargs')
    .command('listar', 'Imprime en pantalla la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        }
    })
    .option('limite', {
        alias: 'l',
        default: 10
    })
    .help()
    .argv;


// let { crearArchivo } = require("./multiplicar/multiplicar");
// let base = 1;
console.log('process: ', process.argv);
console.log('argv: ', argv);
console.log('base: ', argv.base);
console.log('limite: ', argv.limite);




// crearArchivo(base)
//     .then(archivo => console.log(`Achivo creado: ${ archivo }`)) 
//     .catch(error => console.log(error));