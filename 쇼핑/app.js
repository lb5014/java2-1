const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const app = express();

mongoose.connect('mongodb://localhost:27017/myshopping', { useNewUrlParser: true, useUnifiedTopology: true });

// 사용자 스키마
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: String,
});
const User = mongoose.model('User', userSchema);

// 상품 스키마
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
});
const Product = mongoose.model('Product', productSchema);

// 기본 설정
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));  // public 폴더를 정적 파일 제공

// HTML 파일 라우팅
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'public', 'login.html')));
app.get('/signup', (req, res) => res.sendFile(path.join(__dirname, 'public', 'signup.html')));
app.get('/product/:id', (req, res) => res.sendFile(path.join(__dirname, 'public', 'product.html')));

// 회원가입 API
app.post('/api/auth/signup', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.send("회원가입 성공");
});

// 로그인 API
app.post('/api/auth/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ message: "로그인 성공", token });
    } else {
        res.status(400).send("로그인 실패: 아이디 또는 비밀번호가 틀립니다.");
    }
});

// 모든 상품 조회 API
app.get('/api/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// 특정 상품 조회 API
app.get('/api/products/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
});

// 서버 시작
app.listen(3000, () => console.log("서버가 http://localhost:3000 에서 실행 중입니다."));

// 임시 데이터 추가용 - 개발 시에만 사용
async function createSampleProducts() {
    const products = [
        { name: '스마트폰', description: '최신 스마트폰입니다.', price: 1000000, image: '/images/phone.jpg' },
        { name: '노트북', description: '고성능 노트북입니다.', price: 2000000, image: '/images/laptop.jpg' },
    ];
    await Product.insertMany(products);
}
createSampleProducts();