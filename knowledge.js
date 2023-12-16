const knowledgesData = [
    {
        "knowledgeName": "知識1",
        "comment": "内容１"
    },
    {
        "knowledgeName": "知識名2",
        "comment": "内容２"
    },
    {
        "knowledgeName": "知識名3",
        "comment": "内容３"
    }
];

function loadKnowledgeData() {
    let content = '';

    knowledgesData.forEach(knowledge => {
        content += `<h3>知識名：${knowledge.knowledgeName}</h3>`;
        content += `<p>内容：${knowledge.comment}</p>`;
    });

    document.getElementById('content').innerHTML = content;
}

// ページがロードされた時に関数を実行
window.onload = loadKnowledgeData;
