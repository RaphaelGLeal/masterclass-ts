import {Request, Response} from 'express';
import  EmailServices from '../services/EmailService'

const users = [
    { name : "Raphael", email : 'raphael_gleal@hotmail.com'},
];

export default {
    async index(req:Request, res:Response){
        return res.json(users);
    },

    async create (req: Request, res: Response) {
        const emailService = new EmailServices();
        emailService.sendMail( {
            to : { name : 'Raphael Leal', 
                   email : 'raphael_gleal@hotmail.com'
                },
            message: { subject: "Bem-vindo ao sistema", 
                       body : 'seja bem-vindo'
                }
            }
        );
        return res.send();
    }
};