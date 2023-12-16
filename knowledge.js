const knowledgesData = [
    {
        "knowledgeName": "知識1",
        "comment": "内容１",
        "img": "img/prod1.png"
    },
    {
        "knowledgeName": "知識名2",
        "comment": "内容２",
        "img": "img/prod1.png"
    },
    {
        "knowledgeName": "知識名3",
        "comment": "内容３",
        "img": "img/prod1.png"
    }
];

function loadKnowledgeData() {
    let content = '';

    knowledgesData.forEach(knowledge => {
        content += `<h3>知識名：${knowledge.knowledgeName}</h3>`;
        content += `<p>内容：${knowledge.comment}</p>`;
        content += `<img src="${knowledge.img}" alt="${knowledge.knowledgeName}" style="width: 300px;">`;
    });

    document.getElementById('content').innerHTML = content;
}

// ページがロードされた時に関数を実行
window.onload = loadKnowledgeData;
