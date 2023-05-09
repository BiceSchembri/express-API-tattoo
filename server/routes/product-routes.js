// Core modules
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const productValidation = require('../middlewares/productValidation.middleware');
const productNotFound = require('../middlewares/productNotFound.middleware');

// Show landing page
router.route('/').get((req, res) => {
  res.send(
    `Welcome!
    <br>
    This is the landing page of my tattoo e-shop.`
  );
});

// Show all products + Create new product
router
  .route('/products')
  .get(productController.getAll)
  .post(productValidation, productController.create);

// Show, update, delete single product
// add admin auth
router
  .route('/products/:id')
  .get(productNotFound, productController.getOne)
  .put(productNotFound, productValidation, productController.update)
  .delete(productNotFound, productController.delete);

// Export the router
module.exports = router;