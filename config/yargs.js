const argv = require('yargs')
    .command('listar', 'Imprime en pantalla la tabla de multiplicar')
    .command('crear', 'Genera un archivo con la tabla de multiplicar')
    .option('base', {
        demand: true,
        alias: 'b'
    })
    .option('limite', {
        alias: 'l',
        default: 10
    }).help()
    .argv;

module.exports = {
    argv
}