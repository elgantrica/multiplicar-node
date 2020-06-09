// requires
const fs = require('fs');


let crearArchivo = async(base, limite) => {
    if (!Number(base)) {
        throw new Error('No es un numero');

    }
    let data = ''
    console.log(limite);

    for (let i = 1; i <= limite; i++) {
        data += (`${base} * ${i} = ${base * i}\n`);
    }

    let proceso = new Promise((resolve, reject) => {
        fs.writeFile(`tablas/tabla-${base}-to-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else { resolve(`tabla-${base}-to-${limite}.txt`); }
        })
    });
    let respuestaProceso = proceso.then(val => val);

    return respuestaProceso;


}

module.exports = { crearArchivo }