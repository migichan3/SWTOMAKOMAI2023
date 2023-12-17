const productsData = [
    {
        "productName": "商品名1",
        "price": "1,000円",
        "material": "PH調整剤，アミノ酸",
        "review": "めちゃおいしい",
        "comment": "4.0/5.0",
        "img": "img/prod1.png"
    },
    {
        "productName": "商品名2",
        "price": "3,000円",
        "material": "PH調整剤",
        "review": "体に良い",
        "comment": "4.2/5.0",
        "img": "img/prod1.png"
    },
    {
        "productName": "商品名3",
        "price": "1500円",
        "material": "アミノ酸，増粘剤",
        "review": "またかいたい！",
        "comment": "3.8/5.0",
        "img": "img/prod1.png"
    }
];

function loadProductData() {
    let content = '';

    productsData.forEach(product => {
        content += `<h3>商品名：${product.productName}</h3>`;
        content += `<p>価格：${product.price}</p>`;
        content += `<p>原材料：${product.material}</p>`;
        content += `<p>口コミ：${product.comment}</p>`;
        content += `<p>レビュー：${product.review}</p>`;
        content += `<img src="${product.img}" alt="${product.productName}" style="width: 300px;">`;
    });

    document.getElementById('content').innerHTML = content;
}

// ページがロードされた時に関数を実行
window.onload = loadProductData;
