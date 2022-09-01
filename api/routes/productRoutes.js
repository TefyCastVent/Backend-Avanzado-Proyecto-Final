import express from 'express';
import * as productController from '../controllers/productController.js'
import createProductValidator from '../middlewares/createProductValidator.js';

const router = express.Router();

router.route('/products')
        .get(productController.getAllProduct)
        .post(createProductValidator,productController.createProduct)

router.route('/:id').put(productController.updateProductById).delete(productController.deleteMovieById);


export default router;