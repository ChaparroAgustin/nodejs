import { envs } from "./config/plugins/envs.plugin";
import { LogModel, MongoDatabase } from "./data/mongo";
import { LogSeverityLevel } from "./domain/entities/log.entity";
import { Server } from "./presentation/server";

(async () => {
    main();
})();



async function main() {

    await MongoDatabase.connect({
        mongoUrl:envs.MONGO_URL,
        dbName:envs.MONGO_DB_NAME
    });


    //create colecction  = tables, documents = regist.

    const newLog = await LogModel.create({
        message:'Test messasge from app.ts to mongo',
        origin: 'app.ts',
        level: LogSeverityLevel.low,
    });
    
    await newLog.save();


    Server.start();

    // console.log(envs.PORT)
    // console.log(envs.MAILER_EMAIL)
    // console.log(envs.MAILER_SECRET_KEY)
    // console.log(envs.PROD)

}

