
import nodemailer from 'nodemailer'
import { envs } from '../../config/plugins/envs.plugin'
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';



interface SendMailOptions {
    to: string | string[]; 
    subject: string;
    htmlBody: string;
    attachment?: Attachment[];
}

interface Attachment{
    filename: string; 
    path: string;
} 


export class EmailService{

    private transporter = nodemailer.createTransport({
         service: envs.MAILER_SERVICE,
         auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY,
         }
        
         
    });

    constructor(){}

    async sendEmail(options: SendMailOptions): Promise<boolean> {
        
        const {to, subject, htmlBody,attachment = []} = options;
        

        try {
        
            const sentInfomation = await this.transporter.sendMail({
                to: to,
                subject: subject,
                html: htmlBody,
                attachments: attachment,
            })

            const log = new LogEntity({
                level: LogSeverityLevel.low,
                message: `Email sent to: ${to}`,
                origin: 'email.service.ts' 
            }) 
           

            console.log(sentInfomation)

            return true;
        } catch (error) {
            
            //console.log(error)
            const log = new LogEntity({
                level: LogSeverityLevel.high,
                message: `Email not sent to${to}, error: ${error}`,
                origin: 'email.service.ts' 
            }) 
        

            return false;
        }


    }
    sendEmailWithFileSystemLogs(to: string | string []) {

        const subject = 'Logs del servidor';
        const htmlBody =  `
        <h3> Log de Sistema NOC </h3>
        <p>aca va a ir texto de relleno</p>
        <p>ver logs adjuntos</p>
        `;
        const attachment:Attachment[] = [
            {filename: 'logs-all.log', path:'./logs/logs-all.log'},
            {filename: 'logs-high.log', path:'./logs/logs-high.log'},
            {filename: 'logs-medium.log', path:'./logs/logs-medium.log'}, 
        ];

        return this.sendEmail({to, subject,htmlBody, attachment });
        
        
    }
    



}
