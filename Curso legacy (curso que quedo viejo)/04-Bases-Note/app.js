
const { crearArchivo } = require('./helpers/Multiplicar');
console.clear();

const [, , arg3 = 'base=5'] = process.argv;
const [ , base = 6] = arg3.split('=');

//const base = 8;

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));




