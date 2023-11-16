const { error } = require('node:console');
const fs = require('node:fs');


const crearArchivo = async (base = 5) => {

    try {
        console.log('======================')
        console.log('     TABLA DEL', base)
        console.log('======================')


        let salida = '';


        for (let i = 1; i < 11; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        console.log(salida)

        fs.writeFileSync(`Tabla del ${base}.txt`, salida)

        return (`Tabla del ${base}`)

    } catch (err) {
        throw err
    }

}

module.exports = {
    crearArchivo
}






///EJEMPLO CON FS.WRITEFILE

// fs.writeFile(`Tabla del ${base}.txt`, salida, (err) =>{
//     if (err) throw err;

//     console.log('Tabla del 5 creada');
// } )