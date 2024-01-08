import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugins';
import { number } from 'yargs';



console.clear();



let outputMessage = '';
const { b:base, l:limit, s:showTable } = yarg;
const headerMessage = `
============================
        Tabla del ${base}
============================\n
`;

for (let i = 1; i <= limit; i++) {

    outputMessage += `${base} x ${i} = ${base * i}\n`;

}

outputMessage = headerMessage + outputMessage;

if (showTable) {

    console.log(outputMessage);

}

console.log('File Created');

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/Tabla del ${base}.txt`, outputMessage);



