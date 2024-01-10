
import { SaveFile, SaveFileOptions } from "./Save-file.use-case";
import fs from 'fs';
describe('save-file.use-case.test', () => {

  afterEach(() => {

    const outputFolderExists = fs.existsSync('./outputs/');
    if (outputFolderExists) fs.rmSync('./outputs/', { recursive: true });

    const customutputFolderExists = fs.existsSync('./outputs');
    if (customutputFolderExists) fs.rmSync('./outputs', { recursive: true });

  })

  test('should save file when all parameters are valid', () => {
    const saveFile = new SaveFile();
    const options: SaveFileOptions = {
      fileContent: 'This is the test',
      fileDestination: './outputs/test',
      fileName: 'test',
      fileExtension: 'txt'
    };

    const fileDestinationFlag = './outputs/test/test.txt';

    const result = saveFile.execute(options);

    const checkFile = fs.existsSync(options.fileDestination);
    const fileContentCheck = fs.readFileSync(fileDestinationFlag, { encoding: 'utf-8' });

    expect(result).toBe(true);
    expect(checkFile).toBe(true);
    expect(fileContentCheck).toBe(options.fileContent);

  });


  test('should return false if directory could not be created', () => {
    const customOptions = {
      fileContent: 'This is the test',
      fileDestination: './outputs/customFolder',
      fileName: 'test',
      fileExtension: 'txt'
    };

    const saveFile = new SaveFile();
    const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
      () => { throw new Error('this is a custom error to test the App'); }
    );

    const result = saveFile.execute(customOptions);

    expect(result).toBe(false);

    mkdirSpy.mockRestore();

  });

  test('should return false if file could not be created', () => {
    const customOptions = {
      fileContent: 'This is the test',
      fileDestination: './outputs/customFolder',
      fileName: 'test',
      fileExtension: 'txt'
    };

    const saveFile = new SaveFile();
    const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
      () => { throw new Error('this is a custom writing error test'); }
    );

    const result = saveFile.execute(customOptions);

    expect(result).toBe(false);

    writeFileSpy.mockRestore();
  });

});