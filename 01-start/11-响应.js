const express = require('express');

const app = express();

app.get('/login', (req, res, next) => {
    console.log(req.query)

    res.status(200) // 设置响应码，会影响返回内容，如是否返回内容

    // end方法不能接受对象，只能接受字符串等，但实际业务一般都是返回对象
    // 所以一般使用的json方法，即设置content-type为 application/json
    // res.end(req.query.name + ' : ' + req.query.pw);
    res.json({name: '123', age: 18})
})

app.listen(8000, () => {
    console.log('fora-data');
})
