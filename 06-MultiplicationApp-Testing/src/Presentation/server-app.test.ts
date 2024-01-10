import fs from 'fs';
import {ServerApp} from './server-app'
import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/Save-file.use-case';


describe("Server-App", () =>{
  afterEach(()=> {
    fs.rmSync('outputs/test', {recursive: true});
  })


    test('should create a file with given options when executed', () => {
        const base = 2;
        const limit = 10;
        const showTable = false;
        const name = 'server-app.test';
        const destination = 'outputs/test';
        const extension = 'txt';
    
        const consoleLogSpy = jest.spyOn(console, 'log');
        const fsMkdirSyncSpy = jest.spyOn(fs, 'mkdirSync');
        const fsWriteFileSyncSpy = jest.spyOn(fs, 'writeFileSync');
    
        const createTableSpy = jest.spyOn( CreateTable.prototype, 'execute' );
        const saveFileSpy = jest.spyOn( SaveFile.prototype, 'execute');

        ServerApp.run({ base, limit, showTable, name, destination, extension });
    
        expect(consoleLogSpy).toHaveBeenCalledWith('Server running...');
        expect(fsMkdirSyncSpy).toHaveBeenCalledWith(destination, { recursive: true });
        expect(fsWriteFileSyncSpy).toHaveBeenCalledWith(`${destination}/${name}.${extension}`, expect.any(String));
        expect(consoleLogSpy).toHaveBeenCalledWith('File Created');

        expect( createTableSpy ).toHaveBeenCalledTimes(1);
        expect( createTableSpy ).toHaveBeenCalledWith({
          base: base,
          limit: limit
        });

        expect (saveFileSpy).toHaveBeenCalledTimes(1);
        
        
    
        consoleLogSpy.mockRestore();
        fsMkdirSyncSpy.mockRestore();
        fsWriteFileSyncSpy.mockRestore();
      });


})
