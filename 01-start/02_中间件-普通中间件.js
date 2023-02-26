// 1. 导入express 也是一个函数，重命名之前为导出的createApplication
const express = require('express');

// 2. 创建一个app,返回也是一个函数
const app = express();

// 3. 中间的各种逻辑处理
// 注册一个中间件（回调函数），即任何请求都会被接受处理，类似于拦截器
app.use((req, res, next) => {
    console.log('第一个中间件'); // 会在服务器内打印
    next();
})
app.use((req, res, next) => {
    console.log('第2个中间件');
    next();
})
app.use((req, res, next) => {
    console.log('第3个中间件');
   res.end('结束响应')
})

// 4. 开启监听
// app 虽然是函数，但在js中也是对象，故可以调用函数
app.listen(8000, () => {
    console.log('express初体验服务器启动成功');
})