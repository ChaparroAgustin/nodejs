import { envs } from "./config/plugins/envs.plugin";
import { LogModel, MongoDatabase } from "./data/mongoDB";
import { LogSeverityLevel } from "./domain/entities/log.entity";
import { Server } from "./presentation/server";

(async () => {
    main();
})();



async function main() {
    Server.start();

    await MongoDatabase.connect({
        mongoUrl:envs.MONGO_URL,
        dbName:envs.MONGO_DB_NAME
    });

    //create colecction  = tables, documents = regist.

    // const newLog = await LogModel.create({
    //     message:'Test messasge from app.ts to mongo',
    //     origin: 'app.ts',
    //     level: LogSeverityLevel.low,
    // });
    
    // await newLog.save();


    const logs = await LogModel.find();
    console.log(logs);

    // console.log(envs.PORT)
    // console.log(envs.MAILER_EMAIL)
    // console.log(envs.MAILER_SECRET_KEY)
    // console.log(envs.PROD)

}

