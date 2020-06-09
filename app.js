const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo } = require('./multiplicar/multiplicar')
const { listarTabla } = require('./multiplicar/listarTabla');

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        listarTabla(base, limite)
            .then(resp => console.log(resp))
            .catch(err => console.log(err))

        break;
    case 'crear':
        let getRespuesta = async(base, limite) => {
            let resp = await crearArchivo(base, limite);
            return `ARCHIVO CREADO: ${resp}`
        }

        getRespuesta(base, limite).then(archivo => console.log(archivo))
            .catch(err => console.log(err))

        break;

    default:
        console.log('Comando no reconocido');

        break;
}


//let base = '3';

//let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
//let argv2 = process.argv
//onsole.log('Limite', argv.limite);

// console.log(argv.base);
// console.log(argv2);




// crearArchivo(base)
//     .then((archivo) => {
//         let resp = await archivo;

//         console.log(`ARCHIVO CREADO: ${  resp}`)
//     });