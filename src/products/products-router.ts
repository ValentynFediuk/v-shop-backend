import express from 'express';
import controller from './products-controller';

const router = express.Router();

router.post('/create-product', controller.createProduct);
router.get('/products', controller.getProducts);
router.get('/product/:title', controller.getProduct);

export = router;