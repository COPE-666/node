const express = require('express');
const userRouter = require('./routers/users')

const app = express();

// 为什么要用路由，因为将所有的请求逻辑写在一个文件，如app里，比较混乱
// 所以就按照路由分模块
// 问题：路由如果还想分路由，怎样书写呢？
app.use('/user', userRouter); // 第一个参数为分模块的根路径

app.listen(8000, () => {
    console.log('fora-data');
})
