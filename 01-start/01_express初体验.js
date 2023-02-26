// 1. 导入express 也是一个函数，重命名之前为导出的createApplication
const express = require('express');

// 2. 创建一个app,返回也是一个函数
const app = express();

// 3. 中间的各种逻辑处理
// 监听默认路径
app.get('/', (req, res, next) => {
    res.send('hello express')
})
app.get('/login', (req, res, next) => {
    res.send('hello login')
})


// 4. 开启监听
// app 虽然是函数，但在js中也是对象，故可以调用函数
app.listen(8000, () => {
    console.log('express初体验服务器启动成功');
})