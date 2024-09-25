import logger from '../config/logger.js';
import TwilioSDK from 'twilio';
import dotenv from 'dotenv';
dotenv.config();

const accountSid = process.env.TWILIO_AccSID;
const authToken = process.env.TWILIO_WSP;
const client = TwilioSDK(accountSid, authToken)

const twilioWSP = (user) => {
    const ADMIN = process.env.TWILIO_ADMINnum
    if (user?.telefono) {
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

export default twilioWSP