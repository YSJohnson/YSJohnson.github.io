document.getElementById('send-message-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 获取输入的值
    const appToken = document.getElementById('appToken').value;
    const topicId = document.getElementById('topicId').value;
    const message = document.getElementById('message').value;

    // 构建请求体
    const requestBody = {
        appToken: appToken,
        content: message,
        topicIds: [topicId],
        contentType: 2,
        verifyPayType: 0
    };

    // 转换为JSON字符串
    const requestData = JSON.stringify(requestBody);

    // 模拟发送请求
    fetch('https://wxpusher.zjiecode.com/api/send/message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: requestData
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // 如果响应成功，解析JSON
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .then(data => {
        document.getElementById('status-message').textContent = `发送成功: ${data.code}`;
    })
    .catch(error => {
        document.getElementById('status-message').textContent = `发送失败: ${error}`;
    });
});
