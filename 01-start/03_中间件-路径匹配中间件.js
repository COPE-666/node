const express = require('express');
const app = express();

// 中间的各种逻辑处理中间件  永远都是执行第一个匹配到的中间件开始
// 只管路径匹配，不管请求方法
app.use('/home', (req, res, next) => {
    console.log('home路径第一次匹配')  // 无论get\post都可以访问到
    next();
})

app.use('/home', (req, res, next) => { // 可以对同一路径设置多个中间件，会按顺序都执行
    console.log('home路径第2次匹配')
    res.send('home路径');
})

app.listen(8000, () => {
    console.log('express初体验服务器启动成功');
})