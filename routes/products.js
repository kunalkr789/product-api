const express = require('express');
const router = express.Router();

const products_api = require('../controllers/api/products_api');

router.get('/', products_api.getProducts);
router.post('/create', products_api.create);
router.delete('/:id', products_api.deleteProduct);
router.post('/:id/update_quantity', products_api.updateProduct);

module.exports = router;