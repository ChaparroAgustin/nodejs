import { string } from "yargs";
import { SaveFile } from "../domain/use-cases/Save-file.use-case";
import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { error } from "console";


interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    name: string;
    destination: string;
    extension: string;
}


export class ServerApp {

    static run({ base, limit, showTable, name, destination, extension }: RunOptions) {

        console.log('Server running...');
        const headerMessage =
            `============================
        Tabla del ${base}
============================\n`
            ;

        const table = new CreateTable().execute({ base, limit });

        const tablePlusHeader = headerMessage + table;

        const wasCreated = new SaveFile().execute({
            fileContent: tablePlusHeader,
            fileName: name,
            fileDestination: destination,
            fileExtension: extension
        })

        if (showTable) console.log(tablePlusHeader);

        (wasCreated)
            ? console.log("File Created")
            : console.log(error);
    }
}