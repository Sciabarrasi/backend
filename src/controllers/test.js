import testService from '../services/test.js';
import logger from '../config/logger.js';

class TestController {
    getTestController = (req, res) => {
        logger.info('Ruta: ' + req.originalUrl + ' - Método: ' + req.method)
        const email = req.user?.email
        const fakerProds = testService.fakerMocks()
        res.render('pages/prods-test.ejs', { fakerProds, email });
    }
}

const testController = new TestController()
export default testController