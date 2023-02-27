const express = require('express');

// node官方提供的解析form-data格式请求体的中间件，虽然没有内置
// form-data格式一般是用于文件上传
// npm install multer
const multer = require('multer');

const app = express();
const upload = multer({ // 此函数参数选填，在服务启动时，如果没有改目录，会自动创建的
    dest: './uploads/' // 表示上传的文件要保存到哪个目录
});

// any方法返回一个回调函数，被用作注册中间件
app.use(upload.any());


app.post('/login', (req, res, next) => {
    console.log(req.body)
    res.end('home路径');
})
// 最后一个中间件用于获取本次上传的文件，并进行保存 
// 上传单文件single(), 多文件 array()
// single函数的参数为上传文件的key
app.post('/upload',(req, res, next) => {
    // console.log(req.body)
    res.end('上传成功');
}, upload.single('file') // 必须放在最后，否则请求会报错（但是老师是放在第一个的），虽然图片也保存了
)

app.listen(8000, () => {
    console.log('fora-data');
})