const express = require('express');
const app = express();

// 对json格式的请求，即判断请求头中content-type是否为application/json（raw格式才有），进行解析为原始对象数据
// 如果判断不是json类型，则赋值空对象，req.body = {}
// express.json() 返回也是一个函数
app.use(express.json()); 
// 同理，对urlencoded请求数据解析
// 同理，如果判断不是urlencoded类型，则赋值空对象，req.body = {}
// extended为true时，表示解析使用第三方库qs
// extended为false时，表示解析使用node内置模块queryString
app.use(express.urlencoded({extended: true}));

app.post('/login', (req, res, next) => {
    console.log('home路径第2次匹配')
    res.end('home路径');
})

app.listen(8000, () => {
    console.log('express初体验服务器启动成功');
})