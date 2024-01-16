
import { SendEmailLogs } from '../domain/use-cases/email/send-logs';
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { EmailService } from './email/email.service';


const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource(),
)


const emailService = new EmailService();


export class Server {

    public static start() { // es static ya que no es necesario instanciar a server para poder acceder a la property.

        console.log('Server started...')


        new SendEmailLogs(emailService, fileSystemLogRepository).execute(['chapy06_0191@hotmail.com']);


        // const emailService= new EmailService();
        // emailService.sendEmailWithFileSystemLogs(
        //     ['chapy06_0191@hotmail.com']
        //     )
        
        
        
        // emailService.sendEmail({
        //     to: 'chapy06_0191@hotmail.com',
        //     subject: 'Logs de sistema NODE.JS',
        //     htmlBody: `
        //     <h3> Log de Sistema NOC </h3>
        //     <p>aca va a ir texto de relleno</p>
        //     <p>ver logs adjuntos</p>
        //     `
        // })

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         // new CheckService().execute('http://localhost:3000/posts');
        //         const url = 'http://google.com';
        //         new CheckService(
        //             fileSystemLogRepository,
        //             ()=> console.log(`${url} is ok`),
        //             ( error )=> console.log( error ),
        //         ).execute(url);
        //     }
        // );
    }



}