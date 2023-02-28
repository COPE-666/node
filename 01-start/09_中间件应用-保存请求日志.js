const fs = require('fs')

const express = require('express');
const morgan = require('morgan') // 记录日志的express官方库 npm install morgan

const app = express();

const writeStream = fs.createWriteStream('./logs/accsss.log', { // 记录的位置
    flags: 'a+'  // 追加方式
})
app.use(morgan('combined', {stream: writeStream})) // 'combined'是一种常用的日志记录格式

app.post('/login', (req, res, next) => {
    console.log(req.body)
    res.end('home路径');
})

app.listen(8000, () => {
    console.log('fora-data');
})
