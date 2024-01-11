import { CronJob } from 'cron'

export class Server{

    public static start() { // es static ya que no es necesario instanciar a server para poder acceder a la property.
        
        console.log('Server started...')
        
        const job = new CronJob(
            '*/10 * * * * *',
            ()=>{
                const date = new Date();
                console.log('10 second', date);
            },
        );

        job.start();
   }



}