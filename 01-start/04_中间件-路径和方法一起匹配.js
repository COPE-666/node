const express = require('express');
const app = express();

// 中间的各种逻辑处理中间件  永远都是执行第一个匹配到的中间件开始
app.get('/home', (req, res, next) => {
    console.log('get home')  // get 方法 home路径才能匹配到
    res.end('get home');
    next();
})

app.post('/login', (req, res, next) => {
    console.log('home路径第2次匹配')
    res.end('home路径');
})

app.listen(8000, () => {
    console.log('express初体验服务器启动成功');
})