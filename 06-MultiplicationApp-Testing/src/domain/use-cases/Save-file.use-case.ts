import fs from 'fs';

export interface SaveFileUseCase {
    execute: (options: SaveFileOptions) => boolean;
}

export interface SaveFileOptions {

    fileContent: string;
    fileDestination: string;
    fileName: string;
    fileExtension: string,

}

export class SaveFile implements SaveFileUseCase {

    constructor(/**
        respository : StorageRepository
    */) {

    }

    execute({
        fileContent,
        fileDestination,
        fileName,
        fileExtension 
    }: SaveFileOptions): boolean {
        try {

            fs.mkdirSync(fileDestination, { recursive: true });
            fs.writeFileSync(`./${fileDestination}/${fileName}.${fileExtension}`, fileContent);

            return true;

        } catch (error) {

            console.log(error);
            return false;

        }

    }


}

