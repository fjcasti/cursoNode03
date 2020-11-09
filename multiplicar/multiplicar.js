const fs = require('fs');
const colors = require('colors');


crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('Base no es un número');
            return;
        }
        if (!Number(limite)) {
            reject('Límite no es un número');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        data += '... y así sucesivamente ;)';

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tablas/tabla-${base}.txt`);
        });
    });

}

listarTabla = (base, limite) => {
    if (!Number(base)) {
        reject('La Base no es un número');
        return;
    }
    if (!Number(limite)) {
        reject('El límite no es un número');
        return;
    }
    console.log(`Tabla del ${base}:`);
    var data;
    for (let i = 1; i <= limite; i++) {
        data = `${base} * ${i} = ${base * i}`;
        console.log(data);
    }

}

module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}