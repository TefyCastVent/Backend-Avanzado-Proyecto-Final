import express from 'express';
import * as productController from '../controllers/productController.js'
import createProductValidator from '../middlewares/createProductValidator.js';
import { checkSeller } from '../middlewares/sellerRoleValidator.js';

const router = express.Router();

router.route('/products')
        .get(productController.getAllProductStock)

router.use('/seller/products',checkSeller)
router.route('/seller/products')
        .get(productController.getAllProduct)
        .post(createProductValidator,productController.createProduct)

router.route('/seller/products/:id').put(productController.updateProductById).delete(checkSeller,productController.deleteProductById);


export default router;