const empleados = [
    {
        id: 1,
        nombre: 'Agustin'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
]
const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    },
]



//ASI ES COMO SE HACE GENERALMENTE 

// const getEmpleado = (id) => { 

//     const promesa = new Promise((resolve, reject) => {

//         const empleado = empleados.find(e => e.id === id)?.nombre

//         if( empleado ){
//             resolve( empleado );
//         }else{
//             reject( `No existe empleado con id: ${id}` )
//         }

//     })

//     return promesa;

// }

/// ESTA ES LA MANERA CON LOS OPERADORES TERNARIOS, EN DONDE ? REEMPLAZA AL IF Y EL OPERADOR : REEMPLAZA AL ELSE


const id = 3;
const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        const empleado = empleados.find(e => e.id === id)?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id: ${id}`);
    })

    //return promesa; este return no es necesario porque se devuelve directamente la promesa creada 

}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;
        (salario)
            ? resolve(salario)
            : reject('No se encuentra salario del empleado indicado')
    })
}

// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));


// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch( err => console.log(err));

// getEmpleado(id)// esto es un callbackhell ya que al momento de agregar mas promesas, se vuelve complicado de mantener
//     // y de entender una vez realizada la tarea, y en caso que se registre un error tmb es complicado de leer.
//     .then(empleado => {

//         getSalario(id)
//             .then(salario => {
//                 console.log('El emplado: ', empleado, 'tiene un salario: ', salario);
//             })
//             .catch(err => console.log(err))
//     })
//     .catch(err => console.log(err))


//LA FORMA DE SOLUCIONAR LOS CALLBACK HELL ES CON LA RESOLUCION DE PROMESAS EN CADENA.ES LO MISMO PERO MAS ORDENADO 
let nombre;
getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log('El empleado: ', nombre, 'tiene un salario de: ', salario))
    .catch(err => console.log(err));
