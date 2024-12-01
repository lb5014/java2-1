const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// 모든 상품 조회
router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// 특정 상품 조회
router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
});

module.exports = router;