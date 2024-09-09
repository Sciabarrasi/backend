const logger = require('./logger');
import dotenv from 'dotenv';
dotenv.config();
const AccSemilla = process.env.TWILIO_AccSID;
const TokenAutorizado = process.env.TWILIO_WSP;
const client = require('twilio')(AccSemilla, TokenAutorizado);


const twilioWSP = (user) => {
    const ADMIN = process.env.TWILIO_ADMINnum;
    if (user.telefono) {
        client.messages
            .create({
                body: 'Tu pedido ha sido recibido y se encuentra en proceso',
                from: 'whatsapp:+14155238886',
                to: `whatsapp:${user.telefono}`
            })
            .then(message => logger.info(message.sid))
        client.messages
            .create({
                body: `Nuevo pedido de ${user.nombre}, email: ${user.email}`,
                from: 'whatsapp:+14155238886',
                to: `whatsapp:${ADMIN}`
            })
            .then(message => logger.info(message.sid))
    }
}


module.exports = twilioWSP