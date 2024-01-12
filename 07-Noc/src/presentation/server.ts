
import { CheckService } from '../domain/use-cases/checks/check-service';
import { CronService } from './cron/cron-service';



export class Server {

    public static start() { // es static ya que no es necesario instanciar a server para poder acceder a la property.

        console.log('Server started...')

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                // new CheckService().execute('http://localhost:3000/posts');
                const url = 'https://google.com';
                new CheckService(
                    ()=> console.log(`${url} is ok`),
                    ( error )=> console.log( error ),
                ).execute(url);
            }
        );
    }



}