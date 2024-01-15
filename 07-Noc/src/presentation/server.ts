
import { CheckService } from '../domain/use-cases/checks/check-service';
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { CronService } from './cron/cron-service';


const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource(),
)




export class Server {

    public static start() { // es static ya que no es necesario instanciar a server para poder acceder a la property.

        console.log('Server started...')

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                // new CheckService().execute('http://localhost:3000/posts');
                const url = 'http://google.com';
                new CheckService(
                    fileSystemLogRepository,
                    ()=> console.log(`${url} is ok`),
                    ( error )=> console.log( error ),
                ).execute(url);
            }
        );
    }



}