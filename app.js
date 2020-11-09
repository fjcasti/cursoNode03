// para no necesitar el teclear multiplicar.crearArchivo  todo el rato
// y usar simplemente crearArchivo podemos usar desestructuración y en lugar usar:
//       const multiplicar = require("./multiplicar/multiplicar");
// podemos usar:
let { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
let base = 1;

console.log(module);
// el módulo es un objeto global que está disponible a lo largo de toda la aplicación.
// el módulo tiene un ID, una parte de exportaciones, la ruta desde la que se trabaja y mas cosas
// las exportaciones son un "lugar" donde poner objetos para que sean accesibles de forma global

// par 
// añadiendola a la sección 
//    exports = { crearArchivo: crearArchivo }
// o declarándola directamente en esa sección
//    module.exports.crearArchivo = (base) => { ... }

// a la vez que 'module' existen otros procesos uno muy importante es 'process'
// que vamos a usar para recibir los parámetros por consola.

console.log(crearArchivo);
console.log(listar);


let arg = process.argv[2];
console.log(arg);
base = arg.split("=")[1];
crearArchivo(base)
    .then(archivo => console.log(`Achivo creado: ${ archivo }`))
    .catch(error => console.log(error));