console.clear();
import { crearArchivo } from "./FileCreation";
import { tablaEnConsola } from "./Multipicator";

const base = 6;

const salida = tablaEnConsola(base);

crearArchivo(salida, base);

// //const base = 8;

// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err));
