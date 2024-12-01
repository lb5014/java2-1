// 상품 목록 불러오기
async function loadProducts() {
    const response = await fetch('/api/products');
    const products = await response.json();
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.price}원</p>
            <button onclick="viewProduct('${product._id}')">자세히 보기</button>
        `;
        productList.appendChild(productDiv);
    });
}

// 상품 상세 정보 보기
async function viewProduct(productId) {
    const response = await fetch(`/api/products/${productId}`);
    const product = await response.json();
    document.getElementById('product-title').innerText = product.name;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-description').innerText = product.description;
    document.getElementById('product-price').innerText = `${product.price}원`;
}

// 메인 페이지에서 로드
if (document.getElementById('product-list')) {
    loadProducts();
}