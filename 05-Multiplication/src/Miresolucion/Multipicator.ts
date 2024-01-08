

export const tablaEnConsola = (base:number) =>{
    
    console.log('======================')
    console.log('     TABLA DEL', base)
    console.log('======================')

    let salida = '';
    
    for (let i = 1; i < 11; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
    }
    
    console.log(salida)
    
    return (salida);
} 
