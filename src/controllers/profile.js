import logger from '../config/logger.js';

class ProfileController {
    getProfileController = (req, res) => {
        logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
        const user = req?.user
        res.render('pages/profile', { user })
    }
}

const profileController = new ProfileController()
export default profileController