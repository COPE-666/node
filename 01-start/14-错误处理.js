const express = require('express');

const app = express();

const USERNAME_ALREADY = '已存在该用户' // 错误信息统一定义

app.get('/login', (req, res, next) => {
    let result = false; // 测试假数据，真实应是数据库查询的结果
    if(result) {
        res.json('成功')
    } else {
        // res.json('已存在该用户')
        // 不要单独返回错误响应提示，而是传给错误处理中间件统一处理，
        // 而且最好不要传字符串，而是错误对象
        // next是专用来传递错误的,但是带错误参数后，就不会执行正常中间件了，而是错误处理中间件
        next(new Error(USERNAME_ALREADY)) 
    }
})

app.use((err, req, res, next) => { // 当中间件有四个参数时，第一个便是接受的错误信息
    let status = 400;

    res.status(status)
    res.json({
        errCode: status,
        errMsg: err.message
    })
})

app.listen(8000, () => {
    console.log('fora-data');
})
