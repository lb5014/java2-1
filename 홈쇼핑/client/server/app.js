const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const app = express();

mongoose.connect('mongodb://localhost:27017/myshopping', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.listen(3000, () => console.log("서버가 http://localhost:3000 에서 실행 중입니다."));