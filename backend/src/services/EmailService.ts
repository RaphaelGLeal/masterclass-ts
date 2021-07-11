interface IMailTo{
    name: string;
    email: string;
}
interface IMailMessage{
    subject: string;
    body: string;
    attachemnt?: string[];
}
interface MessageDTO {
    to: IMailTo;
    message: IMailMessage;
}
// DTO -> Date Transfer Objet (DDD)


class EmailServices {
    sendMail(  {to, message} : MessageDTO ) {
        console.log(`Email enviado para ${to.name}: ${message.subject}` );
    }
}

export default EmailServices;