import fs  from 'fs';


export const crearArchivo = async (salida: string, base: number) => {

    try {
       
        fs.writeFileSync(`./outputs/Tabla-${base}.txt`, salida);

    } catch (err) {
        throw err
    }

}
