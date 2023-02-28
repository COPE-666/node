const express = require('express');

const app = express();

// 此类请求参数解析一般用于get请求
app.get('/user/:id', (req, res, next) => {
    console.log(req.params)
    res.end(req.params.id);
})

// 因为路径参数可能有多个，故params是对象格式
app.get('/user/:id/:name', (req, res, next) => {
    console.log(req.params)
    res.end(req.params.id + '  ' + req.params.name);
})

app.get('/login', (req, res, next) => {
    console.log(req.query)
    res.end(req.query.name + ' : ' + req.query.pw);
})

app.listen(8000, () => {
    console.log('fora-data');
})
