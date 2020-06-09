const colors = require('colors');


let listarTabla = (base, limite) => {
    console.log('===================='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('===================='.green);



    return new Promise((resolve, reject) => {
        let data = ''
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);

        }
        resolve(data);

    })
};

module.exports = { listarTabla }