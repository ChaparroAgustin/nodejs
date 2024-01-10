import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'

export const yarg = yargs(process.argv)
    .option('b',{
        alias:'base',
        type:'number',
        demandOption: true,
        describe:'Multiplication table base'
    })
    .option('l',{
        alias:'limit',
        type:'number',
        default: 10,
        describe:'Multiplication table limit'
    })
    .option('s',{
        alias:'show',
        type:'boolean',
        default: false,
        describe:'Show multiplication table'
    })
    .options('n',{
        alias:'name',
        type:'string',
        default:'multiplication-table',
        describe:'File Name'
    })
    .option('d',{
        alias:'destination',
        type: 'string',
        default:'./outputs',
        describe:'File Destination'
    })
    .option('e',{
        alias:'extension',
        type:'string',
        default:'txt',
        describe:'File extension'
    })
    .check((argv, options)=>{
        if(argv.b < 0) throw 'Error: base must be positive number';
        if(argv.b < 1) throw 'Error: base must be greater than 0';

        return true
    })
    .parseSync();




