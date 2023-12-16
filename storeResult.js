const productsData = [
    {
        "productName": "商品名1",
        "review": "レビュー1",
        "comment": "口コミ1"
    },
    {
        "productName": "商品名2",
        "review": "レビュー2",
        "comment": "口コミ2"
    },
    {
        "productName": "商品名3",
        "review": "レビュー3",
        "comment": "口コミ3"
    }
];

function loadProductData() {
    let content = '';

    productsData.forEach(product => {
        content += `<h3>商品名：${product.productName}</h3>`;
        content += `<p>口コミ：${product.comment}</p>`;
        content += `<p>レビュー：${product.review}</p>`;
    });

    content += '<button onclick="location.href=\'detail.html\'">詳細を見る</button>';
    document.getElementById('dialogContent').innerHTML = content;
}

function showPopup() {
    loadProductData();
    document.getElementById('customDialog').style.display = 'block';
}

function closeDialog() {
    document.getElementById('customDialog').style.display = 'none';
}

function getQueryStringParameter(param) {
    var params = new URLSearchParams(window.location.search);
    return params.get(param);
}

function updateTitle() {
    var product = getQueryStringParameter('product');
    if (product) {
        document.getElementById('searchTitle').textContent = product + 'の検索結果';
    }
}

window.onload = updateTitle;
