const productsData = [
    {
        "productName": "商品名1",
        "review": "レビュー1",
        "comment": "口コミ1",
        "img": "img/prod1.png"
    },
    {
        "productName": "商品名2",
        "review": "レビュー2",
        "comment": "口コミ2",
        "img": "img/prod1.png"
    },
    {
        "productName": "商品名3",
        "review": "レビュー3",
        "comment": "口コミ3",
        "img": "img/prod1.png"
    }
];

function loadProductData() {
    let content = '';

    productsData.forEach(product => {
        content += `<h3>商品名：${product.productName}</h3>`;
        content += `<p>口コミ：${product.comment}</p>`;
        content += `<p>レビュー：${product.review}</p>`;
        content += `<img src="${product.img}" alt="${product.productName}" style="width: 300px;">`;
    });

    document.getElementById('content').innerHTML = content;
}

// ページがロードされた時に関数を実行
window.onload = loadProductData;
