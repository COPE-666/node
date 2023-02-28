const express = require('express');
const path = require('path')

const multer = require('multer');

const app = express();
// 自定义文件存储，diskStorage表示硬盘存储，还有其他如内存存储
const storage = multer.diskStorage({
    destination: (req, file, cb) => { // cb即callback缩写
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        const extname = path.extname(file.originalname); // 取原文件名的后缀，即.png
        // 使用Date可以保证命名不重复
        cb(null, Date.now() + extname);
    },
})
const upload = multer({
    // dest: './uploads/'  // 使用storage自定义时注释
    storage  // 表示自定义，如文件的名称、上传的位置等
});

// 注意： 不能注册为全局中间件，否则会有多文件上传冲突问题，而是写在具体的路由中
// 使用则表示有多个上传信息，取时要用req.files 而不是 req.file
// app.use(upload.any()); 


app.post('/login', (req, res, next) => {
    console.log(req.body)
    res.end('home路径');
})

app.post('/upload',(req, res, next) => {
    res.end('上传成功');
    console.log(req.files); // 根据是由调用any()选择属性
}, app.use(upload.any()),  upload.single('file') 
)

app.listen(8000, () => {
    console.log('fora-data');
})

//文件整体比较混乱，因为接口、逻辑处理代码都放在一起了，后续会优化