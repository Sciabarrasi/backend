import logger from '../config/logger.js';

class RootController {
    getRootController = (req, res) => {
        // logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
        const email = req.user?.email
        res.render('pages/socket.ejs', { email });
    }
}

const rootController = new RootController()
export default rootController