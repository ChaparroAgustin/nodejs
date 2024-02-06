import { LogModel } from "../../data/mongoDB";
import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";



export class MongoLogDatasource implements LogDatasource {

    async saveLog(log: LogEntity): Promise<void> {
        const newLog = await LogModel.create(log);
        console.log('Mongo Log created: ', newLog.id)
    }

    async getLog(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {

        const newLogs = await LogModel.find({
            level: severityLevel
        });

        return newLogs.map(mongoLog => LogEntity.fromObject(mongoLog));// esto es lo mismo que  return newLogs.map( LogEntity.fromObject )
    }

}

