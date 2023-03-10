const express = require('express');
const { httpGetAllProducts, httpAddNewProduct, httpGetProductsByCategory } = require('./products.controller');

const productsRouter = express.Router();

productsRouter.get('/', httpGetAllProducts);
productsRouter.get('/:category', httpGetProductsByCategory);
productsRouter.post('/',httpAddNewProduct);

module.exports = productsRouter ;