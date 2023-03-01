const express = require('express');

const app = express();

// node中较为简单，只需指定静态资源目录即可，如前端打包的build文件夹
app.use(express.static('./build'))

app.listen(8000, () => {
    console.log('fora-data');
})
