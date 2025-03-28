// 这里可以添加商品推荐的逻辑代码
// 示例：模拟商品数据
const products = [
    { id: 1, name: '防晒', price: 49.9, image: 'image1.png' },
    { id: 2, name: '极光焕颜舒缓面膜', price: 49.9, image: 'image2.png' },
    { id: 3, name: '牙膏', price: 49.9, image: 'image3.png' }
];

// 获取商品列表容器
const productList = document.getElementById('product-list');

// 渲染商品列表
function renderProducts() {
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.innerHTML = `<h3>${product.name}</h3><p>价格：${product.price} 元</p><img src="${product.image}" alt="${product.name}">`;
        productList.appendChild(productItem);
    });
}

// 页面加载完成后渲染商品列表
window.onload = renderProducts;