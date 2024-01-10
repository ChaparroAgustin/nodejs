import fs from 'fs';
import {ServerApp} from './server-app'
import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/Save-file.use-case';
import { log } from 'console';


describe("Server-App", () =>{

  const options = {
    base: 2,
    limit: 10,
    showTable: false,
    name: 'server-app.test',
    destination: 'outputs/test',
    extension: 'txt'
    }
    const headerMessage =
            `============================
        Tabla del ${options.base}
============================\n`
            ;


  afterEach(()=> {
    if(fs.existsSync('outputs/test'))fs.rmSync('outputs/test', {recursive: true});
  });

  beforeEach( ()=>{
    jest.clearAllMocks();
  })


    // test('should create a file with given options when executed', () => {
    //     const base = 2;
    //     const limit = 10;
    //     const showTable = false;
    //     const name = 'server-app.test';
    //     const destination = 'outputs/test';
    //     const extension = 'txt';
    
    //     const consoleLogSpy = jest.spyOn(console, 'log');
    //     const fsMkdirSyncSpy = jest.spyOn(fs, 'mkdirSync');
    //     const fsWriteFileSyncSpy = jest.spyOn(fs, 'writeFileSync');
    
    //     const createTableSpy = jest.spyOn( CreateTable.prototype, 'execute' );
    //     const saveFileSpy = jest.spyOn( SaveFile.prototype, 'execute');

    //     ServerApp.run({ base, limit, showTable, name, destination, extension });
    
    //     expect(consoleLogSpy).toHaveBeenCalledWith('Server running...');
    //     expect(fsMkdirSyncSpy).toHaveBeenCalledWith(destination, { recursive: true });
    //     expect(fsWriteFileSyncSpy).toHaveBeenCalledWith(`${destination}/${name}.${extension}`, expect.any(String));
    //     expect(consoleLogSpy).toHaveBeenCalledWith('File Created');

    //     expect( createTableSpy ).toHaveBeenCalledTimes(1);
    //     expect( createTableSpy ).toHaveBeenCalledWith({
    //       base: base,
    //       limit: limit
    //     });

    //     expect (saveFileSpy).toHaveBeenCalledTimes(1);
        
        
    
    //     consoleLogSpy.mockRestore();
    //     fsMkdirSyncSpy.mockRestore();
    //     fsWriteFileSyncSpy.mockRestore();
    //   });


      test('should run with custom values mocked',() =>{

        const logMock = jest.fn();
        const logErrorMock = jest.fn();
        const createMock = jest.fn().mockReturnValue('2 x 1 = 2');
        const saveFileMock = jest.fn();

        console.log = logMock;
        console.error =logErrorMock;
        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execute = saveFileMock;

        ServerApp.run(options);

        expect( logMock ).toHaveBeenCalledWith('Server running...');
        expect( createMock ).toHaveBeenCalledWith({base: options.base, limit: options.limit});
        expect( saveFileMock ).toHaveBeenCalledWith(
          {
          fileContent: headerMessage + '2 x 1 = 2',
          fileName: 'server-app.test',
          fileDestination: 'outputs/test',
          fileExtension: 'txt',
          });
        //expect(logMock).toHaveBeenLastCalledWith('File Created');
        // expect( logErrorMock ).not.toHaveBeenCalledWith();

        //expect( logErrorMock ).toHaveBeenCalledTimes(0);


      })

})
