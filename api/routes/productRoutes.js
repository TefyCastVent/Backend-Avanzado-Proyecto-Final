import express from 'express';
import * as productController from '../controllers/productController.js'
import createProductValidator from '../middlewares/createProductValidator.js';
import { checkSeller } from '../middlewares/sellerRoleValidator.js';

const router = express.Router();

router.route('/products')
        .get(productController.getAllProductStock)

router.route('/seller/products')
        .get(checkSeller,productController.getAllProduct)
        .post(checkSeller,createProductValidator,productController.createProduct)

router.route('/seller/products/:id').put(checkSeller,productController.updateProductById).delete(checkSeller,productController.deleteProductById);


export default router;